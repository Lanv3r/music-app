import React from "react";

const Playlist = ({ songList, setCurrentSongIndex }) => {
  return (
    <div className="playlist">
      {songList.map((song, index) => (
        <div 
          key={index} 
          className="song-item flex items-center cursor-pointer"
          onClick={() => setCurrentSongIndex(index)} // Set the song index when clicked
        >
          <img src={song.cover} alt={song.title} className="w-12 h-12 rounded-lg mr-4" />
          <span>{song.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Playlist;
