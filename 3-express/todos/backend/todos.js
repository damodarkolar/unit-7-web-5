const fs=require("fs");
const { v4: uuid } = require('uuid');

class TodoList{
    constructor(){
        this.path="./data.json";
        this.data=fs.readFileSync(this.path, "UTF-8")
    }
    /*save todos data */
    saveData(data){
        const info=JSON.stringify(data, null, 2)
        fs.writeFileSync(this.path, info,{encoding:"UTF-8"})
    }
    /*Get Todos*/
    getTodos(){
        let info=this.data
        return info
    }
    /*Add Todos*/
    addTodos(data){
        let info=JSON.parse(this.data);
        let id=0
        this.data.todos?.forEach(element => {return     id=element.id
        });
        console.log(info.todos)
        console.log(id)
        data.id=uuid()
        info.todos.push(data)
        this.saveData(info)
        return "Added to list"
        }
    /*get to do*/
    getTodo(id){
        let info=JSON.parse(this.data);
        let todo=info.todos?.filter(ele=>ele.id==id)
        return todo;
    }
    /*Delete Todo*/
    deleteTodo(id){
        let info=JSON.parse(this.data);
        let filteredData=info.todos.filter(ele=>ele.id!=id)
        this.saveData({todos:filteredData});
        return "Deleted";
    }
    /*Edit Todo*/
    editTodo(data){
        const {id}=data;
        let info=JSON.parse(this.data);
        let filteredData=info.todos.filter(ele=>ele.id!=id);
        filteredData.push(data)
        this.saveData({todos:filteredData});
        return "Updated";
    }

}

module.exports=TodoList;