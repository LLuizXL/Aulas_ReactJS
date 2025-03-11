import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import MovieCard from "./components/movieCard/MovieCard";
// import logo from "";




const App = () => {
  const [search, setSearch] = useState("");
  const [movies,setMovies] = useState([])
  

  //Utilizando chaves API do arquivo .env
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;


//Alimentando com dados para não ficar nulo

//Criando a conexão com a API e trazendo informações
const searchMovies= async (title)=> {
  const response = await fetch(`${apiUrl}&s=${title}`)
  const data = await response.json();

  //Alimentando o movies

  setMovies(data.Search);

}

const handleKeyPress = (e) => { // e = evento | ao clicar ou digitar, acontece algo
  e.key === "Enter" && searchMovies(search);
};

  return (
    <div id="app">
      <img className="logo" src={"https://placehold.co/200x200"} alt="" />

      <div className="search">
        <input
          onKeyDown={handleKeyPress}
          onChange={(e) =>setSearch(e.target.value)}
          type="text"
          placeholder="Pesquise por filmes"
       />
        <img
         onClick={() => searchMovies(search)}
         src={"https://placehold.co/20x20"} 
         alt=""
          />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map(
            (movie,index) => (
              <MovieCard key={index} {...movie} />
            ))}
        </div>
      ) : (
        <h3 className="empty">Filme não encontrado 😥</h3>
      )}




      <Footer 
      devName={"LLuizXL"}
      devLink={"https://github.com/LLuizXL"}
      />
    </div>
  );
}

export default App;
