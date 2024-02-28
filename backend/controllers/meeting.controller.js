import Meeting from '../models/meetingModels.js';
import Suggestion from '../models/sugesttionModels.js';
import User from '../models/userModels.js';

// Create and Save a new Meeting
const createMeeting = async (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Meeting
  const meeting = {
    title: req.body.title,
    description: req.body.description,
    id_user_org: req.body.id_user_org

  }
  const suggestion = {
    datetime: req.body.datetime,
    location: req.body.location,
    description_location: req.body.description_location
  };



  // Save Meeting in the database
  try {
    const newSuggestion = await Suggestion.create(suggestion);
    const data = await Meeting.create(meeting);
    const relationship = await data.setSuggestion(newSuggestion)
    res.status(201).json(relationship);
  }
  catch (error) {
    res.status(500).json({
      message:
        error.message || "Some error occurred while creating the Meeting."
    });
  }
};



const getMeetingByUser = async (req, res) => {
  const id = req.params.id;

  try {
    const meeting = await Meeting.findAll({
      where: {
        id_user_org: id,
      },
      include: [
        {
          model: User, attributes: ['nickname', 'username']
        },
        {
          model: Suggestion, attributes: ['location', 'description_location', 'datetime']

        }
      ],
    });
    if (meeting.length === 0) {
      return res.status(404).json({ message: `ID:${id}not found` });
    }
    return res.status(200).json(meeting);
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

export { createMeeting, getMeetingByUser };