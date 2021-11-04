import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.h4`
  a {
    color: #000;
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Login = styled.button`
  padding: 10px 30px;
  outline: none;
  border: none;
  border-radius: 7px;
  background: #093A3E;
  color: #fff;
  font-weight: bold;


  &:hover {
    background: #3AAFB9;
  }
`;
