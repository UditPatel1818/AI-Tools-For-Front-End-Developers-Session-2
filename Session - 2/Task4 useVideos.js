import { useEffect, useState } from "react";

function useVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      const data = [
        { id: 1, title: "React Tutorial" },
        { id: 2, title: "JavaScript Basics" },
        { id: 3, title: "Node.js Crash Course" },
      ];

      setVideos(data);
    }

    fetchVideos();
  }, []);

  return videos;
}

export default useVideos;