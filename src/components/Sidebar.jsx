import React from 'react'
import  {Stack} from '@mui/material'
import { categories } from '../utilities/constants';



const Sidebar = ({selectedCategory,setSelectedCategory}) => {
  return (
  <Stack
        direction= "row"
        sx={{
            overflowY:"auto",
            height: {sx: 'auto' , md:'95%'},flexDirection: {md: 'column'}
        }}
        >

{categories.map((Category) => (
    <button 
    style= {{background : Category.name === selectedCategory && '#FC1503', color: "white"}}
    className='category-btn'
    onClick={() => setSelectedCategory(Category.name)}
    key={Category.name}
    >
        <span style = {{ color: Category.name === selectedCategory ? "white" : "red" , marginRight: '15px'}}>
            {Category.icon}
        </span>
        <span>
            {Category.name}
        </span>
    </button>
)
)}
  </Stack>
  )
}

export default Sidebar