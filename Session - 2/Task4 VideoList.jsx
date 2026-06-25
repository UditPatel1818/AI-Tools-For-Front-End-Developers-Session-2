import React from "react";
import useVideos from "./useVideos";

function VideoList() {
  const videos = useVideos();

  return (
    <div>
      <h2>YouTube Videos</h2>

      <ul>
        {videos.map((video) => (
          <li key={video.id}>
            {video.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VideoList;