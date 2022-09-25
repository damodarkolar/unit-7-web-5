const { default: mongoose } = require("mongoose");
const dataBaseConnection=require("./dataBaseConnection");

/*To create schema*/
const moviesDataSchema=new mongoose.Schema({

})


/*To create model*/
const movieDataModel=mongoose.model("moviesData", moviesDataSchema);


module.exports={moviesDataSchema,movieDataModel};