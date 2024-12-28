import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import SearchBar from './SearchBar'
import { FileCopy } from '@mui/icons-material'

const Navbar = () => {
  return (
    <Stack
    direction="row" 
    alignItems="center"
    p={2}
    sx={{position:"sticky",
      background:"#000",top:0,justifyContent:"space-between"
    }}>
  <Link to="/" style={{display:"flex",alignItems:"center"}}>
  <img src={logo} style={{height:"65px"}}/>
  </Link>
  <SearchBar/>
    </Stack>
  )
}

export default Navbar