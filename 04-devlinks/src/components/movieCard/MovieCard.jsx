import MovieDescription from "../movieDescription/MovieDescription";
import styles from "./MovieCard.module.css";

const MovieCard = ({ apiUrl, ...props }) => {
  return (
    <>
    <div className={styles.movie}>
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
    <MovieDescription apiUrl={apiUrl} movieId={props.imdbID} />
    </>
  );
};

export default MovieCard;
