import styled from 'styled-components';

export const SearchBox = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 100%;
  background-color: #008b8b;
  z-index: 2;
`;

export const SearchForm = styled.form`
  display: flex;
`;
export const SearchInput = styled.input`
  padding-left: 7px;
  height: 40px;
  width: 200px;
  outline: none;
  :focus {
    border-color: #b0e0e6;
  }
`;
