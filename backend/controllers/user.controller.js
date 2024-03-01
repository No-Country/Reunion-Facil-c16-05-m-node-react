import User from "../models/userModels.js";
import { Op} from "sequelize";

export const getAll = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200);
    await res.json(users);
  } catch (error) {
    return res.json({ message: error.message });
  }
};

export const userSearch = async (req, res) => {
  const valueSearch = req.query.value;
  //El id lo envia el frontend
  const idIgnore =req.body.id_user_org;
  
  try {
    const usersFounds = await User.findAll({
      where: {
        id_user:{
          [Op.not]:idIgnore
        },
        [Op.or]: [
          {
            nickname: {
              [Op.like]: `%${valueSearch}%`,
            },
          },
          /* {
            email: {
              [Op.like]: `%${valueSearch}`,
            },
          }, */
          {
            username: {
              [Op.like]: `%${valueSearch}`,
            },
          },
        ],
      },
      attributes:{exclude:['password','phone_number']}
      
    });
    if (usersFounds.length == 0) {
      return res.status(404).json("Coincidences not found");
    }
    return res.status(200).json(usersFounds);
  } catch (error) {
    return res.status(500).json({message:error});
  }
};

export const createUser = async (req, res) => {
  const { username, nickname, email, phone_number, password } = req.body;
  if (req.body < 5) {
    throw new Error("parameters are missing in the body");
  }

  try {
    const newUser = await User.create({
      username,
      nickname,
      email,
      phone_number,
      password,
    });

    newUser.save();

    return res.status(201).json(
      newUser);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { username, nickname, email, phone_number, password } = req.body;
  try {
    const updateUser = await User.update(
      { username, nickname, email, phone_number, password },
      { where: { id_user: id } }
    );

    return res.status(200).json("successful update");
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const userId = await User.findByPk(id);
    if (!userId) {
      return res.status(404).json({ message: "User not found" });
    }
    await userId.destroy();

    res.json({ message: `successfully removed ID: ${id}` }).status(204);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
