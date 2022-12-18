import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const trandingEndPoints = '/trending/movie/day';
const API_KEY = 'a4b64e934bd6b381798223a1d6191ff5';

export const getTrending = async () => {
  const response = await axios.get(`${trandingEndPoints}?api_key=${API_KEY}`);
  return response.data.results.map(({ id, title }) => {
    return {
      id,
      title,
    };
  });
};
