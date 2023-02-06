import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import Navbar from "../layout/Navbar";
import VidoeCard from "../layout/VidoeCard";
import { options } from "../assets/fetch";
function Video() {
  const { id } = useParams();
  const [vidD, setvidD] = useState({});
  const [sugVids, setsugVids] = useState([]);
  // console.log(id);
  

  const viddata = async () =>
    await fetch(
      `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setvidD(response?.items[0]));
  // console.log(vidD)

  const suggested = async (id) => {
    await fetch(
      `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${id}&part=id%2Csnippet&type=video&maxResults=20`,
      options
    )
      .then((response) => response?.json())
      .then((response) => setsugVids(response?.items));
  };

  useEffect(() => {
    viddata(id);
  }, [id]);

  useEffect(() => {
    suggested(id);
  }, [id]);

  return (
    <div className="vid-page">
      <Navbar />
      <div className="page">
        <div className="vid-area">
          <div className="player">
            <ReactPlayer width={"100%"} controls={true} url={`https://www.youtube.com/watch?v=${id}`} />
          </div>
          <p className="vid-title" >{vidD?.snippet?.title}</p>
          <p>{vidD?.snippet?.description?.slice(0,200)}</p>
          {/* <img src={vidD?.snippet?.thumbnails?.standard?.url} alt="" /> */}
        </div>
        
        <div className="videos">
          {sugVids.map((video) => (
            <VidoeCard key={video?.id.videoId} video={video} />
          ))}
        
        </div>
      </div>
    </div>
  );
}

export default Video;
