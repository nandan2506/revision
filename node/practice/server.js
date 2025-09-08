const express = require("express")
const connection = require("./config/db")
const { userRoutes } = require("./routes/user.routes")
const logger = require("./middlewares/logger.middleware")
const cors = require('cors')
const app = express()
const PORT = 8000

app.use(express.json())
app.use(logger)
app.use(cors())

app.use("/user", userRoutes)


app.use((req,res)=> {
    return res.status(404).json({message:"route not found"}) 
})


app.listen(PORT,()=>{
console.log("app started on port",PORT)
connection()
})