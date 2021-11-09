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
