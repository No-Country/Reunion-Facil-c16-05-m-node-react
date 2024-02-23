import { DataTypes } from "sequelize";
import sequelize from "../db/database.js";

const UserRelationship = sequelize.define("user_relationship", {
  id_user_one: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  id_user_two: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  relationship_type: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
});

export default UserRelationship;
