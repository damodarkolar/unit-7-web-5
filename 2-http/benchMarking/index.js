const http=require("http");
const fs=require("fs");
const PORT=8080;
const PATH="./text.txt";


const server=http.createServer((req, res)=>{
console.log(req.url)
let data=fs.readFile(PATH, {encoding:"UTF-8"})
res.end(JSON.stringify(data))
})


server.listen(PORT, ()=>{
    console.log(`server started ${PORT}`);
})