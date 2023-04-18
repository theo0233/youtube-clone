import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Box} from '@mui/material';
import {Navbar,Feed,Channel,Search,Video} from './components'


const App = () => (
    <BrowserRouter>
        <Box sx={{backgroundColor: '#000'}}>
            <Navbar/>
            <Routes>
                <Route path='/' exact element= {<Feed /> } />
                <Route path='/search/:searchTerm' element ={<Search/>} />
                <Route path='/channel/:id' element ={<Channel />} />
                <Route path='/video/:id' element ={<Video />} />
            </Routes>
        </Box>
    </BrowserRouter>
);

export default App