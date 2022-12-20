import styled from 'styled-components';

export const SearchBarWrap = styled.div`
  display: flex;
  justify-content: left;
  margin-top: 10px;
  align-items: center;
  color: #fff;
  background-color: #fff;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchBarInput = styled.input`
  display: inline-block;
  width: 50%;
  font: inherit;
  font-size: 20px;
  line-height: normal;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }

  &:focus {
    border: 2px solid blue;
  }
`;

export const Button = styled.button`
  display: inline-block;
  padding: 3px 8px;
  text-align: center;

  color: #000;
  background-color: lightgray;
  border: 1px solid grey;
  border-radius: 4px;

  font-family: inherit;
  font-size: 18px;
  line-height: 1.33;
  font-style: normal;
  font-weight: 500;

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #fff;
    background-color: #3f51b5;
  }
`;
