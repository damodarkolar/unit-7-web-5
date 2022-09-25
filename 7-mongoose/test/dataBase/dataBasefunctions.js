const mongoose=require("mongoose");
const connectDataBase=require("./dataBaseConnection.js");



const userSchema=new mongoose.Schema({
    id:String,
    age:Number,
    email:String,
    verifiedEmail:String,
    image:String
});

const userModel=mongoose.model("user", userSchema, "users");


module.exports={userSchema,userModel}