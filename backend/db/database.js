import  {Sequelize}  from "sequelize";
import {DB_URL} from '../config.js'



//                                crear nombre  'username' contraseña         
/*  const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    //local
    host: DB_HOST,
    dialect: 'mysql',

}); */


const sequelize = new Sequelize(DB_URL,{
    dialect:'mysql'
});
export default sequelize;