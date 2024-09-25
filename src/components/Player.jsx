import React, { useEffect } from "react";


const Player = ({ currentSong, playNext, playPrevious }) => {
  useEffect(() => {
    if (currentSong) {
      const audioPlayer = document.getElementById("audio-player");
      audioPlayer.load(); // Reload the audio when the current song changes
      audioPlayer.play(); // Automatically play the new song
    }
  }, [currentSong]);

  if (!currentSong) {
    return <div className="player-container">Select a song to play</div>;
  }

  return (
    <div className="player fixed bottom-0 w-full bg-gray-800 text-white p-4">
      <div className="flex items-center justify-between">
        <div className="song-details flex items-center">
          <img
            src={currentSong.cover}
            alt={currentSong.title}
            className="w-16 h-16 rounded-lg object-cover mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold">{currentSong.title}</h3>
          </div>
        </div>

        {/* Previous Song Button */}
        <button onClick={playPrevious} className="text-white mr-4">
          Previous
        </button>

        {/* Audio Player */}
        <audio id="audio-player" controls className="w-1/2">
          <source src={currentSong.file} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        {/* Next Song Button */}
        <button onClick={playNext} className="text-white ml-4">
          Next
        </button>
      </div>
    </div>
  );
};

export default Player;
