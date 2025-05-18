const UserDatas = require("../models/userData.model.js");
const User = require("../models/User.js");

const saveDashboard = async (req, res) => {
  try {
    const {
      profession,
      income,
      savings,
      dob,
      totalSpend,
      foodDining,
      utilities,
      transportation,
      entertainment,
      healthFitness,
      shopping,
      miscellaneous,
      goalName,
      goalAmount,
      goalDeadline,
    } = req.body;

    // Validate required fields
    if (
      !profession || !income || !savings || !dob ||
      !totalSpend || !foodDining || !utilities || !transportation ||
      !entertainment || !healthFitness || !shopping || !miscellaneous ||
      !goalName || !goalAmount || !goalDeadline
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const userId = req.user?.id; // Make sure req.user is set by auth middleware

    // Optional: check if user exists (not required for saving UserData)
    const userExists = await User.findById(userId);
    if (!userExists) {
      return res.status(404).json({ message: "User not found" });
    }

    const createdData = await UserDatas.create({
      userId,
      profession,
      income,
      savings,
      dob,
      totalSpend,
      foodDining,
      utilities,
      transportation,
      entertainment,
      healthFitness,
      shopping,
      miscellaneous,
      goalName,
      goalAmount,
      goalDeadline,
    });

    res.status(201).json({
      message: "Data inserted successfully",
      data: createdData,
    });

  } catch (error) {
    console.error("Error saving dashboard data:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// const getUserData = async (req,res) => {
//   req.query = {id} ;


// }

module.exports = { saveDashboard };

// module.exports = {getUserData} ;
