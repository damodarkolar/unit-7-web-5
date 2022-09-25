const express=require("express");
const PORT=8080;
const MoviesDataServer=require("./serverFunctions.js");

const movieDataFunctions=new MoviesDataServer;

const app=express();
app.use(express.json());


/*Movies Details From Server*/
app.get("/movies",(req, res)=>{
    let data=movieDataFunctions.getMoviesData();
res.send(JSON.stringify(data));
    console.log("get")
})


/*Add movie data to Database*/
app.post("/movies",(req, res)=>{
    let data=req.body;
    let message=movieDataFunctions.addMovieToData(data)
    res.send(message);
        console.log("post");
})

app.delete("/movies/:id",(req, res)=>{
    let {id}=req.params
    let message=movieDataFunctions.deleteMovieFromData(id);
    res.send(message);
        console.log("delete");
})

app.patch("/movies/:id",(req, res)=>{
    let {id}=req.params;
    let data=req.body
    let message=movieDataFunctions.updateData(id,data);
    res.send(message)
        console.log("patch");
})

    




app.listen(PORT,()=>{
    console.log(`Server started in PORT ${PORT}`)
})