import React, { useEffect, useState } from 'react'
// import { fetchApi } from '../assets/fetch'
import Navbar from '../layout/Navbar'
import Sidebar from '../layout/Sidebar'
import Content from './Content'

function HomePage() {
  const [selectCategory, setselectCategory] = useState("front end");
  const [videos, setvideos] = useState([])
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e1a35da017mshe54f24e83be68a9p1543e2jsn711a0b317ba4',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  const fetchApi = async (url) => {
    await fetch(`https://youtube-v31.p.rapidapi.com/search?q=${url}&part=snippet%2Cid&maxResults=50`, options)
    .then(response => response.json())
   .then(response => setvideos(response.items))
  }

  useEffect(() => {
    fetchApi(`${selectCategory}`)
  }, [selectCategory])
  
  return (
    <div>
      <Navbar />
      <div style={{display:"flex"}} className="area">
      <Sidebar selectCategory={selectCategory} setselectCategory={setselectCategory} />
      <Content videos={videos} />
      </div>
    </div>
  )
}

export default HomePage