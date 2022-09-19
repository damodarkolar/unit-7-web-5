import { Button, Checkbox, Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const TodoEdit = () => {


  const { id }=useParams()
  const [todo, setTodo]=useState({});
  const {name, description, status}=todo;
  const navigate=useNavigate()
  useEffect(()=>{
    fetch(`http://localhost:8080/todo/${id}`)
    .then(res=>res.json())
    .then(data=>{setTodo(data[0])})
    .catch(err=>console.log(err))
  },[])


const handleOnChange=(e)=>{
const {name, value}=e.target
setTodo((prev)=> ({...prev,[name]:value}))
console.log(todo)
}

const handleOnClick=()=>{
  fetch(`http://localhost:8080/todo`,{
    method:"PATCH",
    body:JSON.stringify(todo),
    headers:{
      "Content-Type":"application/json"
    }
  })
  navigate("/")
}
  return (
    <div>
      <Input placeholder='Name' name="name" value={name} size='lg' onChange={handleOnChange}/>
      <Input placeholder='Description' name="description" value={description} size='lg' onChange={handleOnChange}/>
      <Checkbox checked={status} onChange={()=>{setTodo((prev)=>({...prev, status:!status}))}}>Status</Checkbox>
      <Button colorScheme='blue' onClick={handleOnClick}>EDIT</Button>
    </div>
  )
}
