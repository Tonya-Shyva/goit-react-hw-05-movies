import { Outlet } from 'react-router';

import { HeaderStyled, Navigation, StyledLink } from './Header.styled';

export const Header = () => (
  <>
    <HeaderStyled>
      <Navigation>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Navigation>
    </HeaderStyled>
    <Outlet />
  </>
);
