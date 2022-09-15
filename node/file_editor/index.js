const fs=require("fs");


const type=process.argv[2];

// if(type==="readDirectory"){
//     if(fs.argv.length===3){
//         var directoryPath="../file_editor"
//     }else{
//         console.log(fs.argv[3])
//     }
    
// }



switch (type) {
    case "read":
        console.log(fs.readFileSync("./files/test.txt", "UTF-8"));        
        break;
    case "append":
        fs.appendFileSync("./files/test.txt", " CONTENT ");        
        break;
    case "delete":
        fs.unlinkSync("./files/test.txt");        
        break;
    case "create":
        fs.open("./files/test.txt","w",(err, file)=>{
            if(err) throw err;
            console.log("file is created")
        });        
        break;   
    case "rename":
        fs.renameSync("./files/test.txt", "./files/new.txt",(err)=>{
            if(err) throw err;
            console.log("renamed")

        });        
        break;
    case "readDirectory":
        fs.readdirSync("../file_editor",(err, files)=>{
            console.log(files)
            files.forEach(element => {
                console.log(element)                
            });
        })
    default:

        break;
}