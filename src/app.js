const express=require("express")
const cookieParser = require("cookie-parser")
const authrouter= require("./routes/authrouter")
const postrouter=require("./routes/postroute")


const app=express()
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authrouter)
app.use("/api/post",postrouter)


module.exports=app