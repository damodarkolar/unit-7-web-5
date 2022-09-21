const express=require("express");
const PORT=8080;
const fs=require("fs");

const app=express();
app.use(express.json())
 
/*Function to check the required fields */
const dataValidation=(req, res,next)=>{
   const movieData=req.body;
if(movieData.ID!=undefined && movieData.Name!=undefined && movieData.Rating!=undefined && movieData.Description!=undefined && movieData.Genre!=undefined && movieData.Cast!=undefined){
        next()
   } else{
    res.send("Data is Missing please check the data")  
 }
  
}

/*Function to Validate  the data type */
const dataTypeValidation=(req, res, next)=>{
    const movieData=req.body;
    if(typeof movieData.ID=="number" && typeof movieData.Name=="string" && typeof movieData.Rating=="number" && typeof movieData.Description=="string" && typeof movieData.Genre=="string" && typeof movieData.Cast=="string"){
        res.send(JSON.stringify({
            "message":"Data Validated successfully Added to database"
        }))
        next();
   } else{
    res.send("Data type is not correct please check")  
 }
}
/*Function to Add validated Data into database*/
const addValidatedData=(req, res)=>{
    const movieData=req.body;
    const oldData=JSON.parse(fs.readFileSync("./moviesData.json",{encoding:"UTF-8"}));
    oldData.movies.push(movieData);
    let updatedData=JSON.stringify(oldData, null,2);
    fs.writeFileSync("./moviesData.json", updatedData,{encoding:"UTF-8"})
}

app.use("/", dataValidation);
app.post("/", dataTypeValidation)
app.post("/", addValidatedData)




app.listen(PORT, ()=>{
    console.log(`Server started in ${PORT}`);
})