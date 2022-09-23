const express=require("express");
const PORT=8080;
const fs=require("fs");

const app=express();
app.use(express.json())
 
const {dataValidation, dataTypeValidation}=require("./middleWare.js");


/*Function to Add validated Data into database*/
const addValidatedData=(req, res)=>{
    const movieData=req.body;
    const oldData=JSON.parse(fs.readFileSync("./moviesData.json",{encoding:"UTF-8"}));
    oldData.movies.push(movieData);
    let updatedData=JSON.stringify(oldData, null,2);
    fs.writeFileSync("./moviesData.json", updatedData,{encoding:"UTF-8"})
}

app.use(dataValidation)
app.use(dataTypeValidation)
app.post("/", addValidatedData)




app.listen(PORT, ()=>{
    console.log(`Server started in ${PORT}`);
})