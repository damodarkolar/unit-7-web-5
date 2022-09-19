import React from 'react'
import { useNavigate } from 'react-router-dom'

export const TodoElement = (params) => {
  const navigate=useNavigate();
    const { name, status, id}=params.todo
    const handleDelete=(e)=>{
      fetch(`http://localhost:8080/todo/${id}`,{
        method:"DELETE"
      })
      .then(res=>res.json())
      .then(data=>params.fetchTodos())
      .catch(err=>console.log(err))
    }

    const handleEdit=()=>{
      navigate(`/todoEdit/${id}`)
    }

  return (
    <div style={{display:"flex", justifyContent:"space-evenly"}}>
        <div>{name}</div>
        <div>{status? "Completed" : "Pending"}</div>  
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleEdit}>Edit</button>       
    </div>
  )
}
