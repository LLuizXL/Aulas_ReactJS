import styles from './MovieDescription.module.css'

const MovieDescription = ({apiUrl, movieId}) => {
  return (
    <div>{movieId}
    {apiUrl}</div>
  )
}

export default MovieDescription