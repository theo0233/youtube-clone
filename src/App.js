import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Box} from '@mui/material';
import Feed from './components/Feed'
import Navbar from './components/Navbar';
import Channel from './components/Channel';
import Video from './components/Video';
import Search from './components/SearchFeed';


const app = () => (
    <BrowserRouter>
        <Box>
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

export default app