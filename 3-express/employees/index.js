const express=require("express");
const { v4: uuidv4 } = require('uuid');
const fs=require("fs");
const PORT=8080;
let EmployeesFun=require("./employee")

let employees=new EmployeesFun();
const app=express();
app.use(express.json())

app.get("/employees", (req, res)=>{
    let info=employees.getDetails()
    res.send(JSON.stringify(info))
})
app.post("/employee", (req, res)=>{
    let details=req.body
   const message= employees.addDetails(details)
    res.send(message)
})
app.delete("/employee/:id", (req, res)=>{
    let id=req.params.id
    let message=employees.deleteEmployee(id);
    res.send(message)
    // res.send()
})
app.get("/employee/:id",(req, res)=>{
    let id=req.params.id;
    let details=employees.getEmployeeDetail(id);
    res.send(JSON.stringify(details[0]))
})
app.patch("/", (req, res)=>{
    res.send("patch")
})


app.listen(PORT, ()=>{
    console.log(`Server started in PORT ${PORT}`)
})
