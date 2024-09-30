const connectDB = require("./database/db")
const appServer  = require("./app")


// dotenv configer
require("dotenv").config()

// connect mongoDB
const URL = process.env.DB_URL
connectDB(URL)
appServer()