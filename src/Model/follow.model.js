const mongoose = require("mongoose")

const followschema = new mongoose.Schema({

    follower: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        require: [true, "follower is required"]
    },

    followee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        require: [true, "followee is required"]
    },

},

    {
        timestamps: true
    }

)


const followmodel = mongoose.model("follows", followschema)

module.exports = followmodel