const http=require("http");
const PORT=8080;


const server=http.createServer((req, res)=>{
  let url=req.url
  if(url==="/"){
    res.write("Pt Web 05")
  }else if(url==="/students"){
    res.write("<h1>Total 35 students</h1>")
  }
// res.write("started")
res.end()
})


server.listen(PORT, ()=>{
    console.log(`server started in PORT ${PORT}`)
})
