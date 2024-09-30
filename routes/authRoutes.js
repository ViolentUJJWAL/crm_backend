const express = require("express");
const { login } = require("../controller/authController");


const routers = express.Router()

routers.post("/register", registerUser)
routers.post("/login", login)

module.exports = routers