import React from "react";

function PlaylistCard({ name, creator, songCount }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "10px",
        width: "300px",
        margin: "20px auto",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
      }}
    >
      <h2>{name}</h2>
      <p><strong>Creator:</strong> {creator}</p>
      <p><strong>Songs:</strong> {songCount}</p>
    </div>
  );
}

export default PlaylistCard;



// Example Use 

// import PlaylistCard from "./PlaylistCard";

// function App() {
//   return (
//     <PlaylistCard
//       name="Top Hits 2026"
//       creator="Spotify"
//       songCount={50}
//     />
//   );
// }

// export default App;