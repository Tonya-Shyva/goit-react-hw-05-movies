import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const trandingEndPoints = '/trending/movie/day';
const searchEndPoints = '/search/movie';
const API_KEY = 'a4b64e934bd6b381798223a1d6191ff5';

export const getTrending = async () => {
  const response = await axios.get(`${trandingEndPoints}?api_key=${API_KEY}`);
  return response.data.results.map(({ id, title, poster_path }) => {
    return { id, title, poster_path };
  });
};

export const getSearchMovies = async searchValue => {
  const response = await axios.get(
    `${searchEndPoints}?api_key=${API_KEY}&query=${searchValue}&language=en-US&page=1`
  );
  return response.data.results.map(({ id, title, poster_path }) => {
    return { id, title, poster_path };
  });
};

export const getMovieDetails = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getCastApi = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

export const getReviewsApi = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response.data;
};
