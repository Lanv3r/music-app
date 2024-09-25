import React, { useState } from 'react';
import Playlist from './components/Playlist';
import Player from './components/Player';

const App = () => {
  const [currentSong, setCurrentSong] = useState(null); // State for the current song

  return (
    <div className="App flex flex-col min-h-screen bg-gray-100">
      <Playlist setCurrentSong={setCurrentSong} /> {/* Pass function to update current song */}
      <Player currentSong={currentSong} /> {/* Pass the current song to Player */}
    </div>
  );
};

export default App;
