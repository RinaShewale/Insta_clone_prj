
const postmodel = require("../Model/post.model")
const likemodel = require("../Model/like.model")
const ImageKit = require("@imagekit/nodejs")
const { toFile } = require("@imagekit/nodejs")
const jwt = require("jsonwebtoken")


const imagekit = new ImageKit({
    privateKey: process.env.ImageKit_Private_key
})

async function createpostcontroller(req, res) {


    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), "file"),
        fileName: "Test",
        folder: "/cohort-2-insta-clone"
    })


    const post = await postmodel.create({
        caption: req.body.caption,
        imgURI: file.url,
        user: req.user.id
    })
    res.status(201).json({
        message: "post created successfully", post
    })
}


async function getuserpost(req, res) {

    const userId = req.user.id
    const post = await postmodel.find({ user: userId })
    res.status(200).json({
        message: "user post featched", post
    })


}


async function getUserPostDetails(req, res) {
  

    const userid = req.user.id

    const postId = req.params.postid

    const post = await postmodel.findById(postId)

    if (!post) {
        return res.status(404).json({
            message: "post is not found"
        })
    }

    const isvaliduser = post.user.toString() === userid
    if (!isvaliduser) {
        res.status(403).json({
            message: "forbidden content"
        })
    }


    res.status(200).json({
        message: "user post featched", post
    })

}

async function likecontroller(req,res) {
    const username= req.user.username
    const postId= req.params.postid

    const post=await postmodel.findById(postId)

    if(!post){
        return res.status(404).json({
            message:"post not found"
        })
    }

    const like = await likemodel.create({
        post:postId,
        user:req.user.username
    })

    res.status(200).json({
            message:"post liked successfully"
        })


}

module.exports = {
    createpostcontroller,
    getuserpost,
    getUserPostDetails,
    likecontroller

}