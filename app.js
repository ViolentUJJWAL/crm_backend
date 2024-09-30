const colors = require('colors')
const express = require("express")
const cors = require("cors")
require("dotenv").config()



const appServer = async () => {
    try {

        const PORT = process.env.PORT || 8000

        // rest object
        const app = express()       

        // middelware
        app.use(cors({
                origin: "http://localhost:5173",
                credentials: true,
            })
        );

        app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });

        app.use(express.json())

        // routes
        app.use("/api/v1", contactRoutes)
        
        // server listen
        app.listen(PORT, () => {
            console.log(`Server running on Post- ${PORT}`.bgBlue.black)
        })

    }
    catch (err) {
        console.log(`app occur error {\n${err}\n}`.bgRed.black)
    }
}

module.exports = appServer