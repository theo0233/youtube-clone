import React from 'react'
import {Link} from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utilities/constants";

const VideoCard = ({video : {id: {videoId}, snippet}}) => {
  
  console.log(videoId,snippet)
    return (
    <Card sx={{width: { md: '320px', xs: '100%'}}}>
      <Link to={ videoId ? `/video/${videoId}` : demoVideoUrl }>
        <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet.title} sx={{width : 340,height:169}}/>
      </Link>
      <CardContent sx={{backgroundColor:'#1d1918',height:'80px'}}>
        <Link to={ videoId ? `/video/${videoId}` : demoVideoUrl } >
          <Typography variant='subtitle1' fontWeight='bold' color='#FFF'>
            {snippet?.title.slice(0,60)}
          </Typography>
        </Link>
        <Link to={ snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl } >
          <Typography variant='subtitle2' fontWeight='bold' color='gray'>
            {snippet?.channelTitle.slice(0,60)}
          </Typography>
        </Link>
      </CardContent>
      
    </Card>
  )
}

export default VideoCard