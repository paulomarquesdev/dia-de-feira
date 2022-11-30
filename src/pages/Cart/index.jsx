import { Button, Snackbar, InputLabel } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useCartContext } from 'common/context/Cart';
import Produto from 'components/Produto';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Voltar, TotalContainer, PagamentoContainer} from './styles';

export function Cart() {
  const [ openSnackbar, setOpenSnackbar ] = useState(false);
  const { cart } = useCartContext();
  const navigate = useNavigate();

  return (
    <Container>
      <Voltar onClick={() => navigate('/feira')} />
      <h2>
        Carrinho
      </h2>
      {cart.map(product => (
          <Produto
            {...product}
            key={product.id}
          />
      ))}
      <PagamentoContainer>
        <InputLabel> Forma de Pagamento </InputLabel>
      </PagamentoContainer>
      <TotalContainer>
          <div>
            <h2>Total no Carrinho: </h2>
            <span>R$ </span>
          </div>
          <div>
            <h2> Saldo: </h2>
            <span> R$ </span>
          </div>
          <div>
            <h2> Saldo Total: </h2>
            <span> R$ </span>
          </div>
        </TotalContainer>
      <Button
        onClick={() => {
          setOpenSnackbar(true);
        }}
        color="primary"
        variant="contained"
      >
         Comprar
       </Button>
        <Snackbar
          anchorOrigin={
            { 
              vertical: 'top',
              horizontal: 'right'
            }
          }
          open={openSnackbar}
          onClose={() => setOpenSnackbar(false)}
        >
           <MuiAlert
            onClose={() => setOpenSnackbar(false)}
            severity="success"
          >
            Compra feita com sucesso!
          </MuiAlert>
        </Snackbar>
    </Container>
  );
}