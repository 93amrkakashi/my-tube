import React, { useEffect, useState } from 'react'
import { options } from '../assets/fetch';
// import { fetchApi } from '../assets/fetch'
import Navbar from '../layout/Navbar'
import Sidebar from '../layout/Sidebar'
import Content from './Content'

function HomePage() {
  const [selectCategory, setselectCategory] = useState("front end");
  const [videos, setvideos] = useState([])
  
  
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
      <Navbar selectCategory={selectCategory} setselectCategory={setselectCategory} />
      <div style={{display:"flex"}} className="area">
      <Sidebar selectCategory={selectCategory} setselectCategory={setselectCategory} />
      <Content videos={videos} />
      </div>
    </div>
  )
}

export default HomePage