const mongoose = require("mongoose")
const colors = require("colors")


const connectDB = async (URL) => {
    try {
        const DB = mongoose.connect(URL)
        console.log(`DataBase Connected`.bgBlue.black)
    }
    catch (err) {
        console.log(`DataBase occur error {\n${err}\n}`.bgRed.black)
    }
}

module.exports = connectDB