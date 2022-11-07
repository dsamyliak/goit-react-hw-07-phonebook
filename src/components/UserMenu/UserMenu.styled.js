import styled from 'styled-components';

export const Container = styled.div`
  max-width: 300px;
  margin: 0;
  padding: 0 16px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px gray solid;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  color: black;
  background-color: darkgray;
  &:hover {
    border: 1px darkgray solid;
    color: white;
    background-color: gray;
  }
`;
export const LoginName = styled.span`
  padding: 8px 16px;

  text-decoration: none;
  color: gray;
  font-family: verdana;
  font-weight: 600;
`;
