const express = require("express")
const { userSignUp, userLogin } = require("../controllers/user.controllers")
const auth = require("../middlewares/authentication.middleware")
const authoriz = require("../middlewares/authorization.middleware")
const userRoutes = express.Router()

userRoutes.post("/signUp", userSignUp)
userRoutes.post("/logIn", userLogin)
userRoutes.get("/data",auth, authoriz("user","admin") ,(req , res)=>{
    return res.status(200).json({message:"protected data successfully feched"})
})

module.exports = {userRoutes}