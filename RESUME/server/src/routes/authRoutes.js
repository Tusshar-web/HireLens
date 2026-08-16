const express = require("express")

//local imports
const {
    register, 
    login,
    getMe
} = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", authMiddleware , getMe)

module.exports = router;