import Guest from "./guestModels.js";
import Meeting from "./meetingModels.js";
import UserRelationship from "./usersRelationshipModels.js";
import User from "./userModels.js";
import Suggestion from "./sugesttionModels.js";
//User and Meeting
User.hasMany(Meeting, { foreignKey: "id_user_org" });
Meeting.belongsTo(User, { foreignKey: "id_user_org" });

//Meeting and Guest
Meeting.hasMany(Guest, { foreignKey: "id_user_guest" });
Guest.belongsTo(Meeting, { foreignKey: "id_user_guest" });

//User and Guest
User.hasOne(Guest, { foreignKey: "id_user_org" });
Guest.belongsTo(User, { foreignKey: "id_user_org" });

//Meeting and Suggestion
Meeting.hasOne(Suggestion, { foreignKey: ["id_meeting","id_user_org" ]});
Suggestion.belongsTo(Meeting, { foreignKey: ["id_meeting","id_user_org" ] });
/* Meeting.hasOne(Suggestion, { foreignKey: "id_user_org" });
Suggestion.belongsTo(Meeting, { foreignKey: "id_user_org" }); */

//Guest and Suggestion
Guest.hasMany(Suggestion, { foreignKey: "id_meeting" });
Suggestion.belongsTo(Meeting, { foreignKey: "id_meeting" });
Guest.hasMany(Suggestion, { foreignKey: "id_user_org" });
Suggestion.belongsTo(Meeting, { foreignKey: "id_user_org" });
Guest.hasMany(Suggestion, { foreignKey: "id_user_guest" });
Suggestion.belongsTo(Guest, { foreignKey: "id_user_guest" });

//Guest and Suggestion
/* Guest.hasMany(Suggestion, { foreignKey: "id_user_guest" });
Suggestion.belongsTo(Guest, { foreignKey: "id_user_suggest" }); */

//User and UserRelationship

User.hasMany(UserRelationship, { foreignKey: "id_user_two" });
UserRelationship.hasMany(User, { foreignKey: "id_user_two" });

User.hasMany(UserRelationship, { foreignKey: "id_user_one" });
UserRelationship.hasMany(User, { foreignKey: "id_user_one" });
