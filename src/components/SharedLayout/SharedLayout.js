import { Outlet } from 'react-router';
import { FcFilmReel } from 'react-icons/fc';

import { Header, Navigation, StyledLink } from './SharedLayout.styled';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';

export const SharedLayout = () => (
  <>
    <Header>
      <Navigation>
        <StyledLink to="/" end>
          <FcFilmReel />
        </StyledLink>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Navigation>
    </Header>
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  </>
);
