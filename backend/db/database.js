import { Sequelize } from "sequelize";

export const sequalize = new Sequelize('reunion_amigos', 'root', '12345', {

    host: 'localhost',
    dialect: 'mysql',

})