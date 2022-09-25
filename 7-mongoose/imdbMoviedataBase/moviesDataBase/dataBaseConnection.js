const mongoose=require("mongoose");



/*To connect the Data Base*/

const dataBaseConnection=async()=>{
    const uri=`mongodb://127.0.0.1:27017/u-7`;

    return new Promise((resolve, reject)=>{

        mongoose.connect(uri)
        .then(()=>{
            console.log("Connected with dataBase");
            resolve();
        })
        .catch(()=>{
            console.log("Connection Failed");
            reject();
        })
    })
}




module.exports=dataBaseConnection