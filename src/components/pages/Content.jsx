import axios from 'axios';
import React from 'react'
import VidoeCard from '../layout/VidoeCard';
function Content({videos}) {
  // console.log(videos);


  return (
    <div className='videos'>
      {videos?.map((video) => <VidoeCard key={video?.id.videoId} video={video} />)}
    </div>
  )
}

export default Content