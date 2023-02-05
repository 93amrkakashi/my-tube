import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Video() {
  const{id} = useParams()
  const [vidD, setvidD] = useState({});

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e1a35da017mshe54f24e83be68a9p1543e2jsn711a0b317ba4',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  const viddata = async () => 
  
  fetch(`https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`, options)
    .then(response => response.json())
    .then(response => setvidD(response))
console.log(vidD)

    useEffect(() => {
      viddata(id);
    }, [id]);

  return (
    <div>Video</div>
  )
}

export default Video