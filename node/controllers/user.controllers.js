const userModel = require("../models/user.model")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const userSignUp = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const userExist = await userModel.findOne({ email })
        if (userExist) {
            return res.status(400).json({ message: "email already registered" })
        }
        const hashedPaas = await bcrypt.hash(password, 10)
        const user = await userModel.create({ name, email, password: hashedPaas })
        return res.status(201).json({ message: "user created successfully", user })


    } catch (error) {
        console.log("error while creating user", error)
        return res.status(500).json({ message: "something went wrong" })

    }
}

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email })
        if (user) {
            const isMatching = await bcrypt.compare(password, user.password)
            if (!isMatching) {
                return res.status(400).json({ message: "Invalid credentials" })
            }
            const token = await jwt.sign({ userId: user._id, role: user.role }, process.env.key)
            return res.status(200).json({ message: "user logedin successfully", token })
        }
        return res.status(400).json({ message: "Invalid credentials" })

    } catch (error) {
        console.log("error while login", error)
        return res.status(500).json({ message: "something went wrong" })
    }
}


module.exports = { userSignUp, userLogin }