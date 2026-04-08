import { useEffect, useState } from "react"
const KEY = "f84fc31d"

export const useMovies = (query)=>{
    const [isLoading, setIsLoading] = useState (false)
    const [error, setError] = useState ("")
    const [movies, setMovies] = useState([])

    useEffect (function(){
        const controller = new AbortController()
        async function fetchMovies() {
          try {
            setIsLoading (true)
            setError ("")
            const res = await fetch (`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,{signal:controller.signal})
            if (!res.ok)
              throw new Error("Something went wrong with fetching movies");
            const data = await res.json()
            if (data.Responce === "False")
              throw new Error ("Movie not found")
            setMovies (data.Search)
            setError ("")
              
            
          } catch (err) {
            setError(err.message)
            
          } 
          finally {
            setIsLoading (false)
          }
        } 
        fetchMovies()
         return function (){
          controller.abort()
        }
      },[query]
    
      )

      return {movies,error,isLoading}

}