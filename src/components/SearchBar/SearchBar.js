import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getSearchMovies } from 'utils/getMoviesApi';

import {
  Button,
  SearchBarInput,
  SearchBarWrap,
  SearchForm,
} from './SearchBar.styled';

function SearchBar() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();

    if (e.target[0].value === '') {
      toast.info('Enter search value');
      return;
    }

    return setSearchParams({ query: e.target[0].value.toLowerCase() });
  };

  useEffect(() => {
    const movieTitle = searchParams.get('query');
    if (movieTitle) {
      getSearchMovies(movieTitle).then(ret => setMovies(ret));
      //   setSearchParams({});
    }
  }, [searchParams]);

  return (
    <>
      <SearchBarWrap>
        <SearchForm onSubmit={handleSubmit}>
          <SearchBarInput
            type="text"
            name="searchValue"
            autocomplete="off"
            autoFocus
            placeholder="Search movie"
          />
          <Button type="submit" aria-label="search button">
            Search
          </Button>
        </SearchForm>
      </SearchBarWrap>
      {movies && <MoviesList movies={movies} />}
    </>
  );
}

export { SearchBar };
