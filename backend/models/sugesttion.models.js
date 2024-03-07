import {DataTypes} from 'sequelize';
import { sequalize } from '../db/database.js';
import { Guest} from '../models/guest.models.js';


export const Suggestion=sequalize.define('suggestion',{
    id_suggestion:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true
    },
    date_time:{
        type:DataTypes.DATETIME,
        allowNull:false,
    },
    location:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:true,
    }
}

)

Suggestion.belongsTo(Meeting, {foreignKey:'id_suggestion'})
