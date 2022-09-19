const express=require("express");
const fs=require("fs");
const PORT=8080;

const app=express();
app.use(express.json());

app.get("/getmeip",(req, res)=>{
res.send("ip")
});

app.get("/products",(req, res)=>{
    res.send("get")
});

app.post("/products",(req, res)=>{
    res.send("POST")
});

app.delete("/product/:id",(req, res)=>{
    res.send("delete")
});

app.patch("/product/:id",(req, res)=>{
    res.send("Patch")
});





app.listen(PORT, ()=>{
    console.log(`server is started in port ${PORT}`)
})