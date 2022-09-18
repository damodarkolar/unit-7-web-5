import { Button, Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { TodoElement } from '../components/TodoElement';

let initialNewTodo={
  name:"",
  status:false,
  description:""
}
export const Home = () => {
  const [todoList, setTodoList]=useState([{name:"aaaa",status:true}, {name:"aaaa",status:true}, {name:"aaaa",status:true}]);
  const [newTodo, setNewTodo]=useState(initialNewTodo)
  const { name, description }=newTodo;
let fetchTodos=()=>{
  fetch(`http://localhost:8080/todos`)
    .then(res=>res.json())
    .then(data=>setTodoList(data.todos))
    .catch(err=>console.log(err))
}
  useEffect(() => {
    fetchTodos();
  }, [])
  

  const handleOnChange=(e)=>{
    const {name, value}=e.target;
    setNewTodo(prev=>({...prev,[name]:value}));
  }
  const handleOnClick=()=>{
    fetch(`http://localhost:8080/todo`,{
      method:"POST",
      body:JSON.stringify(newTodo),
      headers:{
        "Content-Type": "application/json"
      }
    })
    .then(res=>res.json())
    .then(data=>{ fetchTodos()
    console.log(data)})
    .catch(err=>console.log(err))
    setNewTodo(initialNewTodo)
  }
  return (
    <div>
      <div>
      <Input placeholder='Name' name="name" value={name} size='lg' onChange={handleOnChange}/>
      <Input placeholder='Description' name="description" value={description} size='lg' onChange={handleOnChange}/>
      <Button colorScheme='blue' onClick={handleOnClick}>ADD</Button>
      </div>
      <div>
        {
          todoList?.map(ele=>{return <TodoElement todo={ele} fetchTodos={fetchTodos}/>})
        }
      </div>
    </div>
  )
}
