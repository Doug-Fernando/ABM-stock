import styled from 'styled-components';
import ButtonUI from '@material-ui/core/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled(ButtonUI)`
  && {
    margin: 20px;
  }
`;
