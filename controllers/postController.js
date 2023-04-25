//Import Model
const Post = require("../models/postModel")

//Bussiness Logic
exports.createPost = async (req, res) => {
    try {
        const { title, body } = req.body;
        const post = new Post({
            title, body
        })
        const savePost = await post.save();

        res.json({
            post: savePost
        })
    } catch (error) {
        return res.status(400).json({
            error: "Error While Creating Post"
        })
    }
}

