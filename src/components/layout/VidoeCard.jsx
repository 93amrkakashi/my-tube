import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetchChDetails } from "../assets/fetch";

function VidoeCard({ video }) {
  return (
    <div className="vid-card">
      <div className="thumb">
        <Link to={`/video/${video?.id.videoId}`}>
        <img
          src={video?.snippet?.thumbnails?.medium?.url}
          alt={video.snippet.title}
          />
          </Link>
      </div>
      <div className="details">
        {video.snippet.title.length > 25 ? (
          <p className="vid-title">{video.snippet.title.slice(0, 25)}...</p>
        ) : (
          <p className="vid-title">{video.snippet.title}</p>
        )}

        <div className="ch">
          <i class="fa-brands fa-youtube"></i>

          <Link to={`/channel/${video.snippet.channelId}`}>
          {video.snippet.channelTitle.length > 25 ? (
            <p className="ch-name">{video.snippet.title.slice(0, 25)}...</p>
          ) : (
            <p className="ch-name">{video.snippet.channelTitle}</p>
          )}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VidoeCard;
