const mongoose = require("mongoose")
require('dotenv').config()

const URI = process.env.URI

const connection = async()=>{
    try {
        await mongoose.connect(URI)
        console.log("db connected")
    } catch (error) {
        console.log("error while connecting to db",error)
    }
}

module.exports = connection