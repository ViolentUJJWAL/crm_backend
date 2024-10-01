const express = require("express");
const { login, registerUser, logout, verify } = require("../controller/authController");
const { jwtToken } = require("../middleware/auth")


const routers = express.Router()

routers.post("/signup", registerUser)
routers.post("/login", login)
routers.get("/logout", logout)
routers.put("/verify/:id", jwtToken, verify)

module.exports = routers