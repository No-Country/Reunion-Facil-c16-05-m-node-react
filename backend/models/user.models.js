import {DataTypes} from 'sequelize';
import { sequalize } from '../db/database.js';

export const User=sequalize.define('user',{
    id_user:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    phone_number:{
        type:DataTypes.STRING(20),
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    }
}
)

