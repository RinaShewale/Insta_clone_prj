
const postmodel = require("../Model/post.model")
const ImageKit = require("@imagekit/nodejs")
const { toFile } = require("@imagekit/nodejs")
const jwt = require("jsonwebtoken")

const imagekit = new ImageKit({
    privateKey: process.env.ImageKit_Private_key
})

async function createpostcontroller(req, res) {

    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({
            message: "token not provided unauthorized access "
        })
    }

    let decoded = null

    try {
        decoded = jwt.verify(token, process.env.JWT_TOKEN)
    }
    catch (err) {
        return res.status(401).json({
            message: " user not authrized"
        })
    }


    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), "file"),
        fileName: "Test",
        folder: "/cohort-2-insta-clone"
    })


    const post = await postmodel.create({
        caption: req.body.caption,
        imgURI: file.url,
        user: decoded.id
    })
    res.status(201).json({
        message: "post created successfully", post
    })
}


async function getuserpost(req, res) {
    const userid = req.params.userid

    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({
            message: "unauthorized user "
        })
    }

    let decoded = null

    try {
        decoded = jwt.verify(token, process.env.JWT_TOKEN)

    }
    catch (err) {
        return res.status(401).json({
            message: "user not authrized"
        })
    }

    const userId = decoded.id
    const post = await postmodel.find({ user: userId })
    res.status(200).json({
        message: "user post featched", post
    })


}



async function getUserPostDetails(req, res) {
  

    const userid = decoded.id

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









module.exports = {
    createpostcontroller,
    getuserpost,
    getUserPostDetails

}