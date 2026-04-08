import {useState } from "react";
import "./App.css"
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import Main from "./components/Main";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import WatchedSummary from "./components/WatchedSummary";
import WatchedMovieList from "./components/WatchedMovieList";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import MovieDetails from "./components/MovieDetails";
import { useMovies } from "./hooks/useMovies";

export default function App() {
  const [watched, setWatched] = useState([]);
  const [query, setQuery] = useState ("");
  const [selectedId, setselectedId] = useState (null);
  const {movies,isLoading,error} = useMovies (query)
  
  function handleSelectMovie (id){
   setselectedId(selectedId=>(
    id===selectedId?null: id
   ))
  }

  function handleCloseMovie (){
    setselectedId (null)
  }

  function handleAddWatched (movie){
  setWatched (watched=>[...watched,movie])
  }

  function handleDeleteWatched (id){
  setWatched (watched=>watched.filter(movie=> movie.imdbID!==(id)))
  }

  // useEffect (function (){console.log ("after initial render")},[])
  // useEffect(function (){console.log ("after every render")})
  // useEffect (function (){console.log ("during render")},[query])
  // const [isOpen1, setIsOpen1] = useState(true);
  // const [isOpen2, setIsOpen2] = useState(true);


  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery}/>
        <NumResults movies={movies}/>
      </Navbar>
<Main>
  <Box>
    {isLoading&& <Loader/>}
    {error && <ErrorMessage message={error}/>}
    {!isLoading && !error &&<MovieList movies={movies} onSelectMovie={handleSelectMovie}/>} 
  </Box>
  <Box>
    {selectedId?(
      <MovieDetails selectedId={selectedId} onCloseMovie={handleCloseMovie} onAddWatched={handleAddWatched} watched={watched}/>
    ): (
      <>

    <WatchedSummary watched={watched}/>
    <WatchedMovieList watched={watched}onDeleteWatched={handleDeleteWatched}/>
      </>
    )}
  </Box>
</Main>
    </>
  );
}