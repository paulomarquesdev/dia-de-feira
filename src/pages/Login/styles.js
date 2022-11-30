import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  height: 100vh;
  @media(min-width: 768px) {
    height: calc(var(--vh, 1vh) * 100);
    margin: 0 auto;
    width: 60%;
  }
`;

export const Titulo = styled.h2`
  margin-bottom: 20px;
  /* margin-top: 50px; */
`;

export const InputContainer = styled(FormControl)`
  margin-bottom: 30px;
`