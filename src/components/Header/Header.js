import { Suspense } from 'react';
import { Outlet } from 'react-router';

import { HeaderStyled, Navigation, StyledLink } from './Header.styled';
import { Loader } from 'components/Loader/Loader';

export const Header = () => (
  <HeaderStyled>
    <Navigation>
      <StyledLink to="/" end>
        Home
      </StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
    </Navigation>
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  </HeaderStyled>
);
