import { DataTypes } from "sequelize";
import sequalize from "../db/database.js";

const Suggestion = sequalize.define("suggestion", {
  id_suggestion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  datetime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  location: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description_location: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

export default Suggestion;
