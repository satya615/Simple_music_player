import React, { useState, useRef } from 'react';
import './App.css';
import c from './assets/Marana-Mass-MassTamilan.org.mp3'
import d from './assets/Petta-Theme-MassTamilan.org.mp3'
import e from './assets/Singaar-Singh-MassTamilan.org.mp3'
import f from './assets/Ullaallaa-MassTamilan.org.mp3'
import g from './assets/Petta-Paraak-MassTamilan.org.mp3'
import h from './assets/Aaha-Kalyanam-MassTamilan.org.mp3'
import i from './assets/Ilamai Thirumbudhe.mp3'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import note from './assets/note.png'

function App() {
  const [volume, setVolume] = useState(1);
  const [songs, setSongs] = useState([ 
    {
      songname: 'Marana-Mass-MassTamilan.org',
      src: c,
      duration: 3013
    },
    {
      songname: 'Aaha-Kalyanam-MassTamilan.org',
      src: h,
      duration: 3013
    },
    {
      songname: 'Ilamai Thirumbudhe.org',
      src: i,
      duration: 3013
    }
  ,{
    songname: 'Petta-Theme-MassTamilan.org',
    src: d,
    duration: 3013
  },{
    songname: 'Singaar-Singh-MassTamilan.org',
    src: e,
    duration: 3013
  },{
    songname: 'Ullaallaa-MassTamilan.org',
    src: f,
    duration: 3013
  },{
    songname: 'Petta-Paraak-MassTamilan.org',
    src: g,
    duration: 3013
  },
  {
    songname: 'Marana-Mass-MassTamilan.org',
    src: c,
    duration: 3013
  }
,{
  songname: 'Petta-Theme-MassTamilan.org',
  src: d,
  duration: 3013
},{
  songname: 'Singaar-Singh-MassTamilan.org',
  src: e,
  duration: 3013
},{
  songname: 'Ullaallaa-MassTamilan.org',
  src: f,
  duration: 3013
},{
  songname: 'Petta-Paraak-MassTamilan.org',
  src: g,
  duration: 3013
}]);
  const [currentSong, setCurrentSong] = useState(songs[0]); // State for currently playing song
  const audioRef = useRef(null); // Ref for accessing the <audio> element

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };
  const updateSong = (song) => {
    setCurrentSong(song);
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  };

  return (
    
    <div className="container">
      <div className="sidebar">
        <h1>Songs Playlist</h1>
        <div className="content">
          {/* Map through 'songs' array and render each song as a clickable item */}
          {songs.map((song, index) => (
            <p key={index} onClick={() => updateSong(song)}>
              🎵 {song.songname}
            </p>
          ))}
        </div>
      </div>
      <div className="playbody">
        <div className="playhead">
         <h1>Music Player</h1>
        </div>
        <div className="play">
        <h2>🎵{currentSong ? currentSong.songname : ""}</h2>
          <audio ref={audioRef} controls >
            {currentSong && <source src={currentSong.src} type="audio/mpeg" />}
           
          </audio>
          
         
          <p>
            Volume:
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
