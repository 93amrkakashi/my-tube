import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { options } from "../assets/fetch";
import Navbar from "../layout/Navbar";
import VidoeCard from "../layout/VidoeCard";

function Channel() {
  const { id } = useParams();
  
  const [chvids, setchvids] = useState([]);
  const [chD, setchD] = useState({});

  const fetchchvids = async () =>
    await fetch(
      `https://youtube-v31.p.rapidapi.com/search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`,
      options
    )
      .then((response) => response.json())
      .then((response) => setchvids(response?.items));

  const fetchchD = async () =>
    await fetch(
      `https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=${id}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setchD(response?.items[0]));
  // console.log(chD);

  useEffect(() => {
    fetchchvids(id);
  }, [id]);
  useEffect(() => {
    fetchchD(id);
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="channel">
      <div className="ch-area">

        {chD?.brandingSettings?.image?.bannerExternalUrl ? <img className="cover" src={chD?.brandingSettings?.image?.bannerExternalUrl} alt="" />
         : <img className="cover" src="https://t4.ftcdn.net/jpg/02/94/27/81/360_F_294278154_VlUZuAtOprZWhAiAplmvBJg7grD85r9Q.jpg" alt="" /> }
        {/* <img className="cover" src={chD?.brandingSettings?.image?.bannerExternalUrl} alt="" /> */}
        <img className="image" src={chD?.snippet?.thumbnails?.default?.url} alt="" />
        <p className="des"> {chD?.brandingSettings?.channel.description.slice(0,130)}....</p>
      </div>
      <div style={{width:"100%"}} className="videos">
        {chvids.map((video) => (
          <VidoeCard key={video?.id.videoId} video={video} />
        ))}
      </div>
      </div>
    
    </>
  );
}

export default Channel;
