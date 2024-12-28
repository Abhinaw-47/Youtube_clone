import { Stack } from '@mui/material'
import React from 'react'
 import { categories } from './utils/constants'




const Sidebar = ({selectedCategory,setSelectedCategory}) => {
  return (
    <Stack
    direction="row"
    sx={{
        overflowY:"auto",
        height:{sx:"auto",md:'92vh'},
        flexDirection:{md : 'column'}
    }}
    >
      {categories.map((category)=>(
        <button
        className='category-btn'
        onClick={()=>setSelectedCategory(category.name)}
        style={{
          background:category.name===
          selectedCategory && '#FC1503',
          color:'white'
        }} 
        key={category.name}
        >
          <span 
          style={{color:category.name===
            selectedCategory?'white':
            'red',marginRight:"15"
          }}>
            {category.icon}
          </span>
          <span>
            {category.name}
          </span>

        </button>
      ))}
 
    </Stack>
    
  )
}

export default Sidebar