import { useState, useEffect } from 'react';
import { getMovieDetails } from 'utils/getMoviesApi';

export const useMovieDetails = movieId => {
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    getMovieDetails(movieId).then(movieDetailsReturnedFromApi =>
      setMovieDetails(movieDetailsReturnedFromApi)
    );
  }, [movieId]);

  return { movieDetails };
};
