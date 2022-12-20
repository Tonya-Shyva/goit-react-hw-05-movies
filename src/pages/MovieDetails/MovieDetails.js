import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { ImArrowLeft2 } from 'react-icons/im';
import { useMovieDetails } from 'utils/hooks/useMovieDetails';
import { DetailsContainer, GoBackBnt } from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const { movieDetails } = useMovieDetails(movieId);

  const location = useLocation();
  const goBackLink = location.state?.from ?? '/';
  const { title, vote_average, genres, overview, poster_path } = movieDetails;
  const poster = `https://image.tmdb.org/t/p/w500${poster_path}`;
  return (
    <main>
      <Link to={goBackLink}>
        <GoBackBnt>
          <ImArrowLeft2 />
          Go back
        </GoBackBnt>
      </Link>
      <DetailsContainer>
        {poster !== null ? (
          <img src={poster} alt={title} width={240} />
        ) : (
          <img
            src="https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg"
            alt={title}
            width={240}
          />
        )}

        <div>
          <h2>{title}</h2>
          <p>
            User Score:
            {vote_average ? Math.fround(vote_average * 10).toFixed(0) : ''}%
          </p>
          <h3>Overview</h3>
          <p> {overview}</p>
          <h3>Genres</h3>
          <p>{genres ? genres.map(genre => genre.name).join(', ') : ''}</p>
        </div>
      </DetailsContainer>
    </main>
  );
};
