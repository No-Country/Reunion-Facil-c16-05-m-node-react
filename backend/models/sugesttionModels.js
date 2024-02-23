import { DataTypes } from "sequelize";
import  sequalize  from "../db/database.js";

const Suggestion = sequalize.define("suggestion", {
  id_meeting: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  id_user_org:{
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  id_user_guest: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  num_suggestion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  location: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

export default Suggestion;
