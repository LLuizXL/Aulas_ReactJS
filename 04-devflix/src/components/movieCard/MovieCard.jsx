import { useState } from "react";
import MovieDescription from "../movieDescription/MovieDescription";
import styles from "./MovieCard.module.css";

const MovieCard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }
 

  return (
    <>
    <div className={styles.movie} onClick={toggleModal}>
      <div>
        <p>{props.Year}</p>

      </div>
      <div>
      <img src={props.Poster} alt="" />
      </div>
      <div>
      <h4>{props.Type}</h4>
      <h3>{props.Title}</h3>
      </div>
     
    </div>
    {
        isModalOpen && (
          <MovieDescription
          click={toggleModal}
          apiUrl={props.apiUrl}
          movieId={props.imdbID} />
        )
        }
    </>
  );
};

export default MovieCard;
