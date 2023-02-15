const mongoose = require("mongoose");
const userDetailsSchema = new mongoose.Schema({
    fname: String,
    lname:String,
    username:{type:String,unique:true},
    contactno:Number,
    age:Number,
    email: String,
    password: String,
},
{
    collection:"UserInfo"
}
)
const User = mongoose.model("UserInfo",userDetailsSchema);
module.exports = User;