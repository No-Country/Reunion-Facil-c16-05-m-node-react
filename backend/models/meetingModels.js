import { DataTypes } from "sequelize";
import  sequalize  from "../db/database.js";

const Meeting = sequalize.define("meeting", {
  id_meeting: {
    type: DataTypes.INTEGER,
    primaryKey:true
  },
  id_user_org:{
    type: DataTypes.INTEGER, 
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
    id_suggestion:{
      type: DataTypes.INTEGER,
      allowNull:false
    }
  
}, {timestamps:false});


export default Meeting;
