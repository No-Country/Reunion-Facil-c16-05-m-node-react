import { Sequelize } from "sequelize";
//                                      crear nombre  'username' contraseña         
export const sequalize = new Sequelize('reunion_amigos', 'root', 'Jeis*n16', {
    //local
    host: 'localhost',
    dialect: 'mysql',

})