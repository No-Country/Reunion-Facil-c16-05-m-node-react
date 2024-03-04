import { DataTypes } from "sequelize";
import { sequalize } from "../db/database.js";
import { Meeting } from '../models/meeting.models.js'

export const Guest = sequalize.define('guest', {
    id_guest:{
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true 
    },
    phone_number:{
        type: DataTypes.STRING,
        allowNull:false,
        unique: true,
    },
    username:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    status:{
        type: DataTypes.BOOLEAN,
        defaultValue: false

    }
})

Guest.belongsTo(Meeting, {foreignKey: 'id_meeting'})
Meeting.hasMany(Guest, {foreignKey: 'id_guest'})
