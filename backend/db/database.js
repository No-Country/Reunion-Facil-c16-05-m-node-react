import  {Sequelize}  from "sequelize";
//                                      crear nombre  'username' contraseña         
 const sequelize = new Sequelize('reunion_amigos', 'root', 'Jeis*n16', {
    //local
    host: 'localhost',
    dialect: 'mysql',

});

export default sequelize;