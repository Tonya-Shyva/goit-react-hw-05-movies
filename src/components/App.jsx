import { Routes, Route } from 'react-router-dom';
import { NotFound } from '../pages/NotFound(404)/NotFound';
import { Home } from 'pages/Home/Home';

import { Box } from './Box/Box';
import { Movies } from 'pages/Movies/Movies';
import { Header } from './Header/Header';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <Box>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        {/* <Route path="/movies/:movieId/cast" element={<Cast />} /> */}
        {/* <Route path="/movies/:movieId/reviews" element={<Rewiews />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
};
