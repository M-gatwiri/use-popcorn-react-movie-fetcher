import { useEffect, useState } from "react";

export function useMovie(selectedId) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const KEY = "f84fc31d"

  useEffect(
    function () {
      async function getMovieDetails() {
        try{

            setIsLoading(true);
            setError("")
            const res = await fetch(
              `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`,
            );
            const data = await res.json();
            setMovie(data);
        } catch(err){
            setError(err.message)
        }
        setIsLoading(false)
      }
      getMovieDetails();
    },
    [selectedId],
  );

  return { movie, isLoading, error };
}
