const express = require("express");
const router = express.Router();

const authenticateUser = require("../middleware/authenticateUser.js"); // import middleware properly
const { saveDashboard , getUserData} = require("../controllers/dashboardController.js");

router.post("/save-dashboard", authenticateUser, saveDashboard);
// router.get("/get-dashboard/:id", saveDashboard);


module.exports = router;
