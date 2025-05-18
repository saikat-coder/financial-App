const mongoose = require('mongoose');

const UserData = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  profession: { type: String, required: true },
  income: { type: Number, required: true },
  savings: { type: Number, required: true },
  dob: { type: String, required: true },
  totalSpend: { type: Number, required: true },
  foodDining: { type: Number, required: true },
  utilities: { type: Number, required: true },
  transportation: { type: Number, required: true },
  entertainment: { type: Number, required: true },
  healthFitness: { type: Number, required: true },
  shopping: { type: Number, required: true },
  miscellaneous: { type: Number, required: true },
  goalName: { type: String, required: true },
  goalAmount: { type: Number, required: true },
  goalDeadline: { type: String, required: true },
});

// ✅ Fix: correct model name is "UserDatas"
const UserDatas = mongoose.models.UserDatas || mongoose.model("UserDatas", UserData);

module.exports = UserDatas;
