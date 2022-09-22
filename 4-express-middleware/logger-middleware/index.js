const morgan=require('morgan');
const express=require("express");
const PORT=8080;

const app=express();
app.use(morgan(':method'))
app.use(morgan(':status'))
app.use(morgan(':res[content-length]'))
app.use(morgan(':response-time ms'))
app.use(morgan(':date'))
app.use(morgan('HTTP/:http-version'))
app.use(morgan(':url'))
app.use(morgan("combined"))

// morgan(':method :url :status :res[content-length] - :response-time ms')

app.get("/", (req, res)=>{
    res.send("morgan app")
})




app.listen(PORT, ()=>{
    console.log(`Server started in ${PORT}`)
})