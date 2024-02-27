import  {Sequelize}  from "sequelize";
//                                      crear nombre  'username' contraseña         
 const sequelize = new Sequelize('reunion_amigos', 'root', 'root', {
    //local
    host: 'localhost',
    dialect: 'mysql',

});

export default sequelize;