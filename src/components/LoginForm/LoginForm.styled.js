import styled from 'styled-components';

export const FormContainer = styled.form`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const InputForm = styled.input`
  margin-left: 10px;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px gray solid;

  text-decoration: none;
  font-weight: 500;
  color: black;
`;

export const Button = styled.button`
  margin-left: 10px;
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
