const http=require("http");
const fs=require("fs");
const PORT=8080;
const PATH="./text.txt";


const server=http.createServer((req, res)=>{

    let PATH="./textLarge.txt"
    let urlMsg=req.url;
    res.setHeader('Content-Type', 'text/html');
    res.write(`<div style="width:50%; display:flex; flex-direction:column; justify-content:centre; align-item:centre;margin-left:500px"><h1>Different Types of File read System</h1><ul><li><a href="/textsync"> Read File in Sync</a></li><li><a href="/textasync"> Read File in ASync</a></li><li><a href="/textstream"> Read File in Stream</a></li></ul></div>`)
    if(urlMsg=="/textsync"){
        let data=fs.readFileSync(PATH, {encoding:"UTF-8"});
        res.write(`<h3>${data}</h3>`)
        res.end("<h1>aaa</h1>ended");
    }else if(urlMsg=="/textasync"){
        fs.readFile(PATH, {encoding:"UTF-8"},(err, data)=>{
            if(err){
                res.write("something wend wrong")
            }else{
                res.write(`<h3>${data}</h3>`)
            }
        }); 
    }else if(urlMsg=="/textstream"){
        const stream = fs.createReadStream(`${__dirname}/data.txt`);
        stream.pipe(res);
    }
    // res.end()   
})


server.listen(PORT, ()=>{
    console.log(`server started ${PORT}`);
})