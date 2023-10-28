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
  border-color: #42bbc4;
  outline-color: #80eaf1;
`;
export const SearchBtn = styled.button`
  width: 40px;
  background-color: #78e9e9;
  border-color: transparent;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #30505a;
  }
`;
