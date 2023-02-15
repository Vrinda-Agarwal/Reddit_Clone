const express = require("express");
const app = express();

const mongoose = require("mongoose");
const mongoURL = "mongodb+srv://admin:admin@cluster0.psedkhp.mongodb.net/?retryWrites=true&w=majority"
mongoose.set("strictQuery", false);
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => { console.log("Connected to database"); })
    .catch(e => console.log(e));
app.use(express.json())
const cors = require("cors")
app.use(cors());
const bcrypt = require("bcryptjs");
app.listen(3001, () => {
    console.log("Server started!")
})
// app.post("/post",async(req,res)=>{ //send request and recieve resopnse
//     console.log(req.body);
//     const {data}=req.body;
//     try{
//         if(data=="admin"){
//             res.send({status:"ok"});
//         }
//         else{
//             res.send({status:"User not found"})
//         }
//     }catch(error){
//         res.send({status:"Something went wrong,try again!"})

//     }
// });
require("./userDetails");
// const User=mongoose.model("UserInfo");
// const User = require('./userDetails')
const User = require("./userDetails.js")

app.post("/register", async (req, res) => {
    const { fname, lname, email, age, username, contactno, password } = req.body;
    console.log(req.body)
    // const encryptedpassword =  bcrypt.hash(password, 12);
    // console.log(encryptedpassword);
    try {
        const oldUser = await User.findOne({ username: username });
        if (oldUser) {
            return res.send({ error: "User Exists!" })

        }
        const new_user = new User({
            fname: req.body.fname,
            lname: req.body.lname,
            username: req.body.username,
            email: req.body.email,
            contactno: req.body.contactno,
            age: req.body.age,
            password: req.body.password
            // password:encryptedpassword
        })
        new_user.save()
            .then((response) => {
                console.log("hiii");
                res.send({ message: 1 });
            })
        // await User.create({ //creating user in MongoDB
        //     uname:req.body.fname,
        //     lname:req.body.lname,
        //     username:req.body.username,
        //     email:req.body.email,
        //     contactno:req.body.contactno,
        //     age:req.body.age,
        //     // password:req.body.password
        //     password:encryptedpassword
        // });

    }
    catch (error) {
        res.send({ status: "error" });
        console.log('errorrrr')
    }
})
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body)
    const user = await User.findOne({ username:username });
    console.log(user);
    if (!user) {
        return res.status(401).json({ message: "Wrong Username" });
    }
    else{
        if(user.password===password){
            // console.log("HIJKJHK")
            return res.status(200).json({ message: "Logged In" });

        }
        else{
            return res.status(401).json({ message: "Password Incorrect,Try Again!" });
        }
    }

})
