const mongoose = require("mongoose");
const PostsSchema = new mongoose.Schema({
    Name:String,
    Description:String,
    Author:String,
    Upvote:Number,
    Downvote:Number,
    Comments:Array,
},
{
    collection:"PostInfo"
}
)
const Postsdata = mongoose.model("PostInfo",PostsSchema);
module.exports =Postsdata;