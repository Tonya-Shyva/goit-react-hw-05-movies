import { Outlet, useLocation, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { ImArrowLeft2, ImArrowRight2 } from 'react-icons/im';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

import {
  AdditionalInformWrap,
  AdditionalInformLink,
  DetailsContainer,
  GoBackLink,
  MovieDescription,
  AdditionalInformText,
  AdditionalInformHead,
} from './MovieDetails.styled';

import { getMovieDetails } from 'utils/getMoviesApi';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState();

  const location = useLocation();
  const backLinkLocation = location.state?.from ?? '/';

  useEffect(() => {
    const responce = getMovieDetails(movieId);
    responce
      .then(Loading.circle())
      .then(res => setMovieDetails(res))
      .catch(error => console.log(error))
      .finally(Loading.remove());
  }, [movieId]);

  if (!movieDetails) return;
  const { title, release_date, vote_average, genres, overview, poster_path } =
    movieDetails;
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
  const slicedReleaseDate = release_date.slice(0, 4);

  return (
    <main>
      <GoBackLink to={backLinkLocation}>
        <ImArrowLeft2 />
        Go back
      </GoBackLink>
      <DetailsContainer>
        <img
          src={
            poster_path !== null
              ? `${IMAGE_URL}${poster_path}`
              : 'https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg'
          }
          alt={title}
          width={240}
        />

        <MovieDescription>
          <h2>
            {title} ({slicedReleaseDate})
          </h2>
          <p>
            User Score:&nbsp;
            {vote_average ? Math.fround(vote_average * 10).toFixed(0) : ''}%
          </p>
          <h3>Overview</h3>
          <p> {overview}</p>
          <h3>Genres</h3>
          <p>{genres ? genres.map(genre => genre.name).join(', ') : ''}</p>
        </MovieDescription>
      </DetailsContainer>
      <AdditionalInformWrap>
        <AdditionalInformHead>
          <h2>Additional information</h2>
          <ul>
            <li>
              <AdditionalInformLink
                to="cast"
                state={{ from: backLinkLocation }}
              >
                <AdditionalInformText>Cast</AdditionalInformText>
                <ImArrowRight2 />
              </AdditionalInformLink>
            </li>
            <li>
              <AdditionalInformLink
                to="reviews"
                state={{ from: backLinkLocation }}
              >
                <AdditionalInformText>Reviews</AdditionalInformText>
                <ImArrowRight2 />
              </AdditionalInformLink>
            </li>
          </ul>
        </AdditionalInformHead>

        <Outlet />
      </AdditionalInformWrap>
    </main>
  );
};
