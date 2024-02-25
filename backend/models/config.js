import Guest from "./guestModels.js";
import Meeting from "./meetingModels.js";
/* import UserRelationship from "./usersRelationshipModels.js"; */
import User from "./userModels.js";
import Suggestion from "./sugesttionModels.js";
import { BelongsTo } from "sequelize";

//User and Meeting
User.hasMany(Meeting, { foreignKey: "id_user_org", sourceKey: "id_user" });
Meeting.belongsTo(User, { foreignKey: "id_user_org" });
//Suggestions and Meeting
Suggestion.hasOne(Meeting, { foreignKey: "id_suggestion", sourceKey: "id_suggestion"});
Meeting.belongsTo(Suggestion, { foreignKey: "id_suggestion" });
//User and Guest
User.hasMany(Guest, { foreignKey: "user_guest", sourceKey: "id_user" });
Guest.belongsTo(User, { foreignKey: "user_guest" });
//Meeting
Meeting.hasMany(Guest, { foreignKey: "id_meeting", sourceKey: "id_meeting" });
Guest.belongsTo(Meeting, { foreignKey: "id_meeting" });

//User and UserRelationship

/* User.hasMany(UserRelationship, { foreignKey: "id_user_two" });
UserRelationship.hasMany(User, { foreignKey: "id_user_two" });

User.hasMany(UserRelationship, { foreignKey: "id_user_one" });
UserRelationship.hasMany(User, { foreignKey: "id_user_one" }); */
