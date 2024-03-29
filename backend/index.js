import app from "./app.js";
import sequelize from "./db/database.js";
import './models/config.js';
const port = process.env.PORT || 3000;

const server = async (port) => {
  try {
    //conexion base de datos
    sequelize.sync({ force: false});
    
    app.listen(port);

    console.log(`Server is listening on port ${port} `);
  } catch (error) {
    console.log("Error: ", error);
  }
};

server(port);
/* 
const jane = await User.create({ firstName: "Jane", : "Doe" });
*/