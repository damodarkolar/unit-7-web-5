import React from 'react'

export const TodoElement = (params) => {
    const { name, status, id}=params.todo
    const handleDelete=(e)=>{
      fetch(`http://localhost:8080/todo/${id}`,{
        method:"DELETE"
      })
      .then(res=>res.json())
      .then(data=>params.fetchTodos())
      .catch(err=>console.log(err))
    }
  return (
    <div style={{display:"flex", justifyContent:"space-evenly"}}>
        <div>{name}</div>
        <div>{status? "Completed" : "Pending"}</div>  
        <button onClick={handleDelete}>Delete</button>
        <button>Edit</button>       
    </div>
  )
}
