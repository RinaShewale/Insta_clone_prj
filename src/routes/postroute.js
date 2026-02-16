const express= require("express")
const postrouter=express.Router()
const postcontroller= require("../controllers/post.controller")
const multer=require("multer")
const upload=multer({storage:multer.memoryStorage()})





postrouter.post("/",upload.single("image"),postcontroller.createpostcontroller)

postrouter.get("/",postcontroller.getuserpost)

postrouter.get("/details/:postid",postcontroller.getUserPostDetails)


module.exports=postrouter