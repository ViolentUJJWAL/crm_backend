const express = require("express");
const { createTodo, updateTodo, getTodo, getSingleTodo } = require("../controller/todoController");
const { jwtToken } = require("../middleware/auth")


const routers = express.Router()

routers.get("/", jwtToken, getTodo)
routers.get("/:id", jwtToken, getSingleTodo)
routers.post("/create", jwtToken, createTodo)
routers.put("/update/:id", jwtToken, updateTodo)


module.exports = routers