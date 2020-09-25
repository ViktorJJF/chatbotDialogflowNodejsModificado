const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatbotUserSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    facebookId: String,
    profilePic: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("ChatbotUsers", ChatbotUserSchema);
