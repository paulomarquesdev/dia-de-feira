import { Button, Snackbar, InputLabel, Select, MenuItem } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useCartContext } from 'common/context/Cart';
import { usePaymentContext } from 'common/context/Payment';
import { UserContext } from 'common/context/User';
import Produto from 'components/Produto';
import { useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Voltar, TotalContainer, PagamentoContainer} from './styles';

export function Cart() {
  const [ openSnackbar, setOpenSnackbar ] = useState(false);
  
  const { cart, totalValueCart, purchase } = useCartContext();
  const { paymentType, formOfPayment, updatePaymentForm } = usePaymentContext();
  const { balance = 0 } = useContext(UserContext);
  const navigate = useNavigate();

  const total = useMemo(() => (balance - totalValueCart), [balance, totalValueCart]);

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
        <Select
          value={formOfPayment.id}
          onChange={(event) => updatePaymentForm(event.target.value)}
        >
          {paymentType.map(payment => (
            <MenuItem key={payment.id} value={payment.id} >
              {payment.name}
            </MenuItem>
          ))}
        </Select>
      </PagamentoContainer>
      <TotalContainer>
          <div>
            <h2>Total no Carrinho: </h2>
            <span>R$ {totalValueCart}</span>
          </div>
          <div>
            <h2> Saldo: </h2>
            <span> R$ {Number(balance).toFixed(2)}</span>
          </div>
          <div>
            <h2> Saldo Total: </h2>
            <span> R$ {total.toFixed(2)}</span>
          </div>
        </TotalContainer>
      <Button
        disabled={total<0 || cart.length === 0}
        onClick={() => {
          purchase();
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