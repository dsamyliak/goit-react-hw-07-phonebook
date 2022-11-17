import styled from 'styled-components';

export const ContactTextInfo = styled.div`
  width: 70%;
  display: inline-block;
  margin-right: auto;
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
