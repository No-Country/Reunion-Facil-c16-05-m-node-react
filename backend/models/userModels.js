import {DataTypes} from 'sequelize';
import  sequalize  from '../db/database.js';

const User=sequalize.define('user',{
    id_user:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    username:{
        type:DataTypes.STRING(200),
        allowNull:false,
    },
    nickname:{
        type:DataTypes.STRING(120),
        allowNull:false,
        unique:true

    },
    email:{
        type:DataTypes.STRING(100),
        allowNull:false,
        unique:true
    },
    phone_number:{
        type:DataTypes.STRING(20),
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING(40),
        allowNull:false,
    }
},{timestamps: false}
);



export default User;
