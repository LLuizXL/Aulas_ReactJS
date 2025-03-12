import { useRef, useState } from "react";
import music from "./assets/music/intro_audio.mp3";
import "./App.css";
import Menu from "./components/menu/Menu";

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };
  const pauseMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const trocaPlayPause = () => {
    isPlaying ? pauseMusic() : playMusic();
    const btn = document.getElementById("btn-music");
    if (btn) {
      btn.classList.toggle("playing", !isPlaying);
    }
  };

  return (
    <div id="App">
      <div className="stars"></div>
      <div className="Profile">
        <img src="https://placehold.co/200x200"></img>
        <p>@LLuizXL</p>
        <audio ref={audioRef} loop autoPlay>
          <source src={music} type="audio/mp3" />
        </audio>

        <button id="btn-music" onClick={trocaPlayPause}></button>
      </div>
      
     <Menu />

      <footer>
        <div className="socials-group">
          <a href="https://instagram.com/awgemxllo">
            Instagram
          </a>
          <a href="https://github.com/LLuizXL">
            Github
          </a>
          <a href="https://open.spotify.com/user/21bknpdt73keyto2syzb4dbca?si=159fbe69bcc04b19">
          Spotify
          </a>
        </div>
        <p>
      WHEN IN DOUBT, ALWAYS STRIVE AND PROSPER.
        </p>

        </footer>
    </div>
  );
}

export default App;
