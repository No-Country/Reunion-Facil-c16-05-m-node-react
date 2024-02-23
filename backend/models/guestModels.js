import { DataTypes } from "sequelize";
import  sequalize  from "../db/database.js";

const Guest = sequalize.define('guest', {
    id_meeting:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    id_user_org: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true
    },
    id_user_guest: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    status_meeting_viewed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    status_accept:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})
export default Guest;
