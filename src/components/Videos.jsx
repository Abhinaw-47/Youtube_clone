import React from 'react'
import { Stack,Box } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Videos = ({videos,direction}) => {
  if(!videos?.length) return <h1 style={{color:"white"}}> Loading..... </h1>

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}> 
      {videos.map((items,idx)=>(
        <Box key={idx}>
        {items.id.videoId && <VideoCard video={items}/>}
        {items.id.channelId && <ChannelCard channelDetail={items}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos