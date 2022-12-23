import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: flex;
  margin: 5px 15px;
`;

export const GoBackLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 80px;
  margin-top: 5px;
  margin-left: 15px;
  color: black;
  background-color: #fff;
  border: none;
  cursor: pointer;
`;

export const MovieDescription = styled.div`
  margin-left: 10px;
`;

export const AdditionalInformWrap = styled.div`
  padding: 15px;
`;

export const AdditionalInformLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: black;

  &.active {
    color: rgb(200, 10, 10);
  }
`;
export const AdditionalInformText = styled.span`
  margin-right: 10px;
`;
