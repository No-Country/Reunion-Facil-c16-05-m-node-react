import {DataTypes} from 'sequelize';
import { sequalize } from '../db/database.js';
import {User} from './user.models.js';
import {Suggestion} from './suggestion.models.js';

export const Meeting=sequalize.define('meeting',{
    id_meeting:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false,
    }
    
}

)
Meeting.belongsTo(User,{foreignKey:'id_user'})
Meeting.hasMany(Meeting, {foreignKey:'id_meeting'})


Suggestion.belongsTo(Meeting, {foreignKey:'id_suggestion'})
Suggestion.hasMany(Meeting,{foreignKey:'id_meeting'})
