import React from 'react'
import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div>
        <Box bg='tomato' w='100%' p={4} color='white' display={"flex"} justifyContent={"space-evenly"}>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </Box>
    </div>
  )
}
