import styled from 'styled-components';

export const LoadMore = styled.button`
  width: 120px;
  height: 35px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
  background-color: #008b8b;
  color: #ffff;
  border: none;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  /* margin-top: 15px; */
  &:hover,
  &:focus {
    background-color: #42b4b4;
  }
`;
