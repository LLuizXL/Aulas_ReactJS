import { useRef, useState } from "react";
import music from "./assets/music/intro_audio.mp3";
import "./App.css";

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying();
    }
  };
  const pauseMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      !setIsPlaying()
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
        <audio ref={audioRef} loop>
          <source src={music} type="audio/mp3" />
        </audio>

        <button id="btn-music" onClick={trocaPlayPause}></button>
      </div>

      <div className="Menu">
        <ul>
          <li>
            <a href="">Regras</a>
          </li>
          <li>
            <a href="">Projetos</a>
          </li>
          <li>
            <a href="">Sobre mim</a>
          </li>
        </ul>
      </div>

      <footer>footer</footer>
    </div>
  );
}

export default App;
