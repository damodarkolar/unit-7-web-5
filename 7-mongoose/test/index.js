const express =require("express");
const mongoose=require("mongoose");
const PORT=8080;
const UserData=require("./userData.js");


const userDataFunction=new UserData();

const app=express();




app.get("/",async (req, res)=>{
    try {
        let data=await userDataFunction.getData();
        res.send(data);
    } catch (error) {
        res.send(error)
    }

    
})





app.listen(PORT,()=>{
    console.log("Server Started")
})







