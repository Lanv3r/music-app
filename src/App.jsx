import React, { useState } from 'react';
import Playlist from './components/Playlist';
import Player from './components/Player';

import song1 from "./assets/songs/lida-ЧСВ.mp3";
import song2 from "./assets/songs/Linkin Park - What I've Done.mp3";
import song3 from "./assets/songs/Куок - МОИ РОБОТЫ.mp3";
import song4 from "./assets/songs/Три дня дождя - Где ты.mp3";
import cover1 from "./assets/covers/lida-ЧСВ.jpeg";
import cover2 from "./assets/covers/Linkin Park - What I've Done.jpeg";
import cover3 from "./assets/covers/Куок - Мои роботы.jpeg";
import cover4 from "./assets/covers/tdd-gde-ti.jpeg";

const songList = [
  {
    title: "lida - ЧСВ",
    file: song1,
    cover: cover1
  },
  {
    title: "Linkin Park - What I've Done",
    file: song2,
    cover: cover2
  },
  {
    title: "Куок - Мои роботы",
    file: song3,
    cover: cover3
  },
  {
    title: "Три дня дождя - Где ты",
    file: song4,
    cover: cover4
  }
];

const App = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0); // State for current song index

  // Function to play the next song
  const playNext = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex < songList.length - 1 ? prevIndex + 1 : 0 // Loop back to the first song
    );
  };

  // Function to play the previous song
  const playPrevious = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : songList.length - 1 // Loop back to the last song
    );
  };

  return (
    <div className="App flex flex-col min-h-screen bg-gray-100">
      {/* Pass song list and setCurrentSongIndex to Playlist */}
      <Playlist 
        songList={songList} 
        setCurrentSongIndex={setCurrentSongIndex} 
      />
      {/* Pass current song and navigation functions to Player */}
      <Player
        currentSong={songList[currentSongIndex]} 
        playNext={playNext} 
        playPrevious={playPrevious} 
      />
    </div>
  );
};

export default App;
