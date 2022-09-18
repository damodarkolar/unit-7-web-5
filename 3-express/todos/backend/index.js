const fs=require("fs");
const express=require("express");
const PORT=8080;
const cors=require("cors")
const TodoList=require("./todos")
const app=express();
app.use(express.json());
app.use(cors())


let todoList=new TodoList()

/*get Todos */
app.get("/todos",(req, res)=>{
    let data=todoList.getTodos();
    res.send(data)
});

/*Add Todos */
app.post("/todo",(req, res)=>{
    const data=req.body;
    const message=todoList.addTodos(data)
    res.send(JSON.stringify(message))
});

/*Delete Todos */
app.delete("/todo/:id",(req, res)=>{
    let id=req.params.id;
    let message=todoList.deleteTodo(id);
    res.send(JSON.stringify(message))
});

/*Update Todos*/
app.get("/todo/:id", (req,res)=>{
    let id=req.params.id
    console.log(id)
    let todo=todoList.getTodo(id);
    res.send(JSON.stringify(todo))
})

/*Get individual Todos*/
app.patch("/todos?:id", (req, res)=>{
    let id=req.id;

})






app.listen(PORT, ()=>{
    console.log(`Server started ${PORT}`);
})