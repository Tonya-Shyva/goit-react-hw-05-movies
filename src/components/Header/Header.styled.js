import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 15px;
  color: #fff;
  background-color: lightgray;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 115px;
  font-weight: bold;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: rgb(200, 10, 10);
  }
`;
