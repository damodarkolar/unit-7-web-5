const mongoose=require("mongoose");

async function connectDataBase(){
    const uri="mongodb://127.0.0.1:27017/assignment";

    return new Promise((resolve, reject)=>{
        mongoose.connect(uri)
    .then(()=>{
        console.log(`Data base is connected`);
        resolve();
    })
    .catch(()=>{
        console.log(`Internal server Issue`)
        reject()
    } )
    })
    
}

module.exports=connectDataBase;