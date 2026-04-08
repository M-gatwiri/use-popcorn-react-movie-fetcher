import React from 'react'
import WatchedMovie from './WatchedMovie'

function WatchedMovieList({watched,onDeleteWatched}) {
    
  return (
  <ul className="list">
                {watched.map((movie) => (
               <WatchedMovie key={movie.imdbID} movie={movie} onDeletedWatched={onDeleteWatched}/>   
                ))}
              </ul>
  )
}

export default WatchedMovieList