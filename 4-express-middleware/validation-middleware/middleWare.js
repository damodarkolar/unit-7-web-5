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

module.exports={dataValidation, dataTypeValidation}