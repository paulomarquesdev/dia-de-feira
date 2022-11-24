import { Button } from '@material-ui/core';
import {
  Container,
  Titulo,
  InputContainer
} from './styles';
import {
  Input,
  InputLabel,
  InputAdornment 
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { UserContext } from 'common/context/User';

export function Login() {
  const navigate = useNavigate();

  return (
    <Container>
      <UserContext.Consumer>
        {({ name, setName, balance, setBalance }) => (
          <>
            <Titulo>
              Insira o seu nome
            </Titulo>
            <InputContainer>
              <InputLabel>
                Nome
              </InputLabel>
              <Input
                value={name}
                onChange={(event) => {
                  setName(event.target.value)
                }}
                type="text"
              />
            </InputContainer>
            <InputContainer>
              <InputLabel>
                Saldo
              </InputLabel>
              <Input
                type="number"
                value={balance}
                onChange={(event) => {
                  setBalance(event.target.value)
                }}
                startAdornment={
                  <InputAdornment position="start">
                    R$
                  </InputAdornment>
                }
              />
            </InputContainer>
            <Button
              variant="contained"
              color="primary"
              onClick={(event) => {
                event.preventDefault();
                navigate('/feira');
              }}
            >
              Avançar
            </Button>
          </>
        )}
        
      </UserContext.Consumer>
    </Container>
  )
};