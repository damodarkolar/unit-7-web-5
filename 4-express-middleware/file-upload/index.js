const express=require("express");
const fs=require("fs");
const multer=require("multer");
const PORT=8080;
const upload=multer({dest:"./upload"});


const app=express();

app.post("/file", upload.single("new"), (req, res, next)=>{
    console.log(req);
    res.send("hai")
})


app.listen(PORT, ()=>{
    console.log("hai")
})