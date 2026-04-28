import React, { useEffect, useRef, useState } from 'react'
import { useMovie } from '../hooks/useMovie'
import { useKey } from '../hooks/useKey'
import StarRating from './StarRating'

function MovieDetails({selectedId,onCloseMovie,onAddWatched,watched}) {
    const [userRating, setUserRating] = useState ("")
    const{isLoading, movie, error} = useMovie (selectedId)
   
    const countRef = useRef (0)

useEffect (function(){
  if(userRating)countRef.current++  
},[userRating])

     const isWatched = watched.some (movie=>
        movie.imdbID.includes(selectedId)
    )

    useKey("Escape",onCloseMovie)

    const watchedUserRating = watched.find (movie=>
        movie.imdbID===selectedId
    )?.userRating

    const {
        Title:title,
        Year:year,
        Poster:poster,
        Runtime:runtime,
        imdbRating,
        Plot:plot,
        Released:released,
        Actors:actors,
        Director:director,
        Genre:genre,
    }=movie

    function handleAdd (){
        const newWatchedMovie = {
            imdbID:selectedId,
            title,
            year,
            poster,
            imdbRating: Number (imdbRating),
            runtime: Number (runtime.split(" ").at(0)),
            userRating,
            ...movie
        }
        onAddWatched (newWatchedMovie)
        onCloseMovie ()
        }
    
    useEffect (function () {
        if(!title) return;
        document.title=`Movie | ${title}`
        return function(){document.title="usePopcorn"}
    },[title])

  return (
    <div className='details'>
        <header>
            <button onClick={onCloseMovie} className='btn-back'>
                &larr;
            </button>
            <img src={poster} alt={`poster of ${title}movie`} />
            <div className='details-overview'>
                <h2>{title}</h2>
                <p>{released} &bull; {runtime}</p>
                <p>{genre}</p>
                <p><span>⭐</span>
                {imdbRating} IMDb rating</p>
            </div>
        </header>

        <section>
            <div className="rating">
                {isWatched ? <p>You rated this movie {watchedUserRating} <span>⭐</span></p>:
                <>
                <StarRating maxsRating={10} size={24} onSetRating={setUserRating}/>
                {userRating>0&&<button onClick={handleAdd} className='btn-add'>+ Add to list</button>}
                </>
                }
            </div>
            <p><em>{plot}</em></p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
        </section>
        
    </div>
  )
}

export default MovieDetails