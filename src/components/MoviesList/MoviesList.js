import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { List } from 'components/common/List';
import { MovieItem } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  return (
    <List>
      {movies.map(({ id, poster_path, title }) => (
        <MovieItem key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={
                poster_path !== null
                  ? `${IMG_URL}${poster_path}`
                  : 'https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg'
              }
              alt={title}
              width={280}
              height={360}
              loading="lazy"
            />
            <p>{title}</p>
          </Link>
        </MovieItem>
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
