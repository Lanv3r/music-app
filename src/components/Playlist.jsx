import React from "react";

// Importing song data and cover images
import song1 from "../assets/songs/lida-ЧСВ.mp3";
import song2 from "../assets/songs/Linkin Park - What I've Done.mp3";
import song3 from "../assets/songs/Куок - МОИ РОБОТЫ.mp3";
import song4 from "../assets/songs/Три дня дождя - Где ты.mp3";
import cover1 from "../assets/covers/lida-ЧСВ.jpeg";
import cover2 from "../assets/covers/Linkin Park - What I've Done.jpeg";
import cover4 from "../assets/covers/tdd-gde-ti.jpeg";
import cover3 from "../assets/covers/Куок - Мои роботы.jpeg";

// List of songs with their details
const songs = [
  { id: 1, title: "lida - ЧСВ", cover: cover1, file: song1 },
  { id: 2, title: "Linkin Park - What I've Done", cover: cover2, file: song2 },
  { id: 3, title: "Куок - Мои роботы", cover: cover3, file: song3 },
  { id: 4, title: "Три дня дождя - Где ты", cover: cover4, file: song4 },
];

const Playlist = ({ setCurrentSong }) => {
  const handleSongClick = (song) => {
    setCurrentSong(song); // Update the current song when clicked
  };

  return (
    <div className="playlist">
      {songs.map((song) => (
        <button
          key={song.id}
          onClick={() => handleSongClick(song)}
          className="song-item flex items-center my-4 p-2 bg-white shadow-md rounded-lg w-full text-left"
        >
          <img
            src={song.cover}
            alt={`${song.title} cover`}
            className="w-16 h-16 rounded-lg object-cover mr-4"
          />
          <div className="song-info">
            <h3 className="text-lg font-semibold">{song.title}</h3>
          </div>
        </button>
      ))}
    </div>
  );
};

export default Playlist;
