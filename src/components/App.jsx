import { Routes, Route } from 'react-router-dom';
import { Loader } from './Loader/Loader';
import { NotFound } from '../pages/NotFound(404)/NotFound';
import { Home } from 'pages/Home/Home';

import { Box } from './Box/Box';
import { Movies } from 'pages/Movies/Movies';
import { Header } from './Header/Header';

export const App = () => {
  return (
    <Box display="block">
      <Header />
      {/* <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route path="/movies/:movieId" element={<MovieDelails />} /> */}
        {/* <Route path="/movies/:movieId/cast" element={<Cast />} /> */}
        {/* <Route path="/movies/:movieId/reviews" element={<Rewiews />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Loader />
    </Box>
  );
};
