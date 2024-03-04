import Meeting from "../models/meetingModels.js";
import Suggestion from "../models/sugesttionModels.js";
import User from "../models/userModels.js";
import Guest from "../models/guestModels.js";
import moment from "moment/moment.js";
// Create and Save a new Meeting
//Datos necesarios: title, id_user_org, suggestion{datetime, location}, guest{guest}
const createMeeting = async (req, res) => {
  // Validate request tittle don't undefined
  if (!req.body.title || !req.body.id_user_org) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Meeting
  const meeting = {
    title: req.body.title,
    description: req.body.description,
    id_user_org: req.body.id_user_org,
  };

  //create a suggestion
  const suggestion = {
    datetime: req.body.datetime,
    location: req.body.location,
    description_location: req.body.description_location,
  };
  const guests = req.body.guests;

  // Save Meeting in the database

  const newSuggestion = await Suggestion.create(suggestion);
  const data = await Meeting.create(meeting);
  const relationship = await data.setSuggestion(newSuggestion);
  try {
    for (const guest of guests) {
      await Guest.create({
        user_guest: guest,
        id_meeting: data.getDataValue("id_meeting"),
      });
    }
    const suggestionDateTime = moment(newSuggestion.getDataValue("datetime")).format("YYYY-MM-DD HH:mm:ss");
    return res.status(201).json({
      ...relationship.dataValues,
      suggestion: {
        datetime: suggestionDateTime,
        location: newSuggestion.getDataValue("location"),
        description_location: newSuggestion.getDataValue(
          "description_location"
        ),
      },
    });
  } catch (error) {
    return res.status(500).json({
      message:
        error.message || "Some error occurred while creating the Meeting.",
    });
  }
};
//--Obtener reuniones de un usuario particular--

const getMeetingByUser = async (req, res) => {
  const id = req.params.id;

  try {
    const meeting = await Meeting.findAll({
      where: {
        id_user_org: id,
      },
      include: [
        {
          model: User,
          attributes: ["nickname", "username"],
        },
        {
          model: Suggestion,
          attributes: ["location", "description_location", "datetime"],
        },
      ],
    });
    if (meeting.length === 0) {
      return res.status(404).json({ message: `ID :${id} not found` });
    }
    return res.status(200).json(meeting);
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

export { createMeeting, getMeetingByUser };
