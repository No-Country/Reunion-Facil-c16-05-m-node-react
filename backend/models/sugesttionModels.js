import { DataTypes } from "sequelize";
import sequalize from "../db/database.js";

const Suggestion = sequalize.define("suggestion", {
  id_suggestion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true
  },
  datetime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING(70),
    allowNull: false,
  },
  description_location: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
});

export default Suggestion;
