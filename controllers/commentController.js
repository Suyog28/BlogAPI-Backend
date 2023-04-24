//Import model
const post = require("../models/postModel")
const comment = require("../models/commentModel")

//Bussiness logic
exports.createComment = async (req, res) => {
    try {
        //Fetch Data from req body
        const { post, user, body } = req.body;
        //Create a comment Object
        const comment = new Comment({
            post, user, body
        })

        //save the new comment into the database
        const savedComment = await comment.save();

        //Find the post by Id, add the new comment to its comment array
        const updatedPost = await post.findByIdAndUpdate(post,
            { $push: { comment: savedComment._id } },
            { new: true })
            .populate("comment")//Populate the comment array with comment document
            .exec();
        res.json({
            post: updatedPost
        })

    } catch (err) {
        return res.status(500).json({
            err: "Error WHile Creating Comments"
        })
    }
}