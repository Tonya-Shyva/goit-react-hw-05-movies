import { Link } from 'react-router-dom';
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

export const AdditionInformWrap = styled.div`
  padding: 15px;
`;
