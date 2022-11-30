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
import { useContext } from 'react';

export function Login() {
  const navigate = useNavigate();
  const { name, setName, balance, setBalance } = useContext(UserContext);

  return (
    <Container>
      <Titulo>
        Insira o seu nome
      </Titulo>
      <InputContainer>
        <InputLabel>
          Nome
        </InputLabel>
        <Input
          value={name}
          type="text"
          onChange={(event) => {
            setName(event.target.value)
          }}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>
          Saldo
        </InputLabel>
        <Input
          value={balance}
          type="number"
          onChange={(event) => setBalance(Number(event.target.value))}
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
        disabled={name.length<3}
        onClick={() => navigate('/feira') }
      >
        Avançar
      </Button>
    </Container>
  )
};