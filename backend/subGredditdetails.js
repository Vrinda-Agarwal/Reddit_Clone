const mongoose = require("mongoose");
const subGredditsSchema = new mongoose.Schema({
    Name:{type:String,unique:true},
    Description:String,
    bannedKeywords:Array,
    Tags:Array,
    //followers
    //joint requests
    moderator:String,
},
{
    collection:"subGredditInfo"
}
)
const Subgredditdata = mongoose.model("subGredditInfo",subGredditsSchema);
module.exports =Subgredditdata;