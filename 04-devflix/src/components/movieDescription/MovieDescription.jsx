import { useState } from "react";
import styles from "./MovieDescription.module.css";
import { useEffect } from "react";
import devFlix from "/favicon.png";

const MovieDescription = (props) => {
  const [movieDesc, setMovieDesc] = useState([]);

  useEffect(() => {
    fetch(`${props.apiUrl}&i=${props.movieId}`)
      .then((response) => response.json())
      .then((data) => setMovieDesc(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={styles.modalBackdrop} onClick={props.click}>
      <div
        className={styles.movieModal}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styles.movieInfo}>
          <img
            src={movieDesc.Poster}
            alt={`Imagem da capa do filme ${movieDesc.Title}`}
          ></img>
          <button onClick={props.click} className={styles.btnClose}>
            X
          </button>
          <div className={styles.movieType}>
            <div>
              <img src={devFlix} alt="" />
              {movieDesc.Type}
              <h2>{movieDesc.Title}</h2>
              <a
                href={`https://google.com/search?q=${encodeURIComponent(
                  movieDesc.Title
                )}`}
                target="_blank"
              >
                ▶️ Assistir
              </a>
            </div>
          </div>
        </div>

        <div className={styles.containerMisc}>
          <div className={styles.containerFlex}>
            Avaliação: {movieDesc.imdbRating} | Duração: {movieDesc.Runtime} |{" "}
            {movieDesc.Released}
          </div>

          <div className={styles.containerFlex}>
            <p>Elenco: {movieDesc.Actors}</p>
            <p> Categoria: {movieDesc.Genre}</p>
          </div>
        </div>
        <div className={styles.desc}>
          <p>
          Sinopse: {movieDesc.Plot} 
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default MovieDescription;
