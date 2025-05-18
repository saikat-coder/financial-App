const express = require('express');
const router = express.Router();

// DOUBLE CHECK this path is correct!
const { register, login } = require("../controllers/authController");

router.post('/register', register);
router.post('/login', login);

module.exports = router;
