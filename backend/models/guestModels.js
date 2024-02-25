import { DataTypes } from "sequelize";
import sequalize from "../db/database.js";

const Guest = sequalize.define("guest", {
  id_user_guest: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true
  },
  status_meeting_viewed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  status_accept: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});
export default Guest;
