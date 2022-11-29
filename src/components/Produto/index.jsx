import { Container } from './styles';
import { memo } from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useCartContext } from 'common/context/Cart';


function Produto({ name, photo, id, value }) {
  const { cart, addProduct, removeProduct } = useCartContext();

  const cartProduct = cart.find(cartItem => cartItem.id === id);

  return (
      <Container>
        <div>
          <img
            src={`/assets/${photo}.png`}
            alt={`foto de ${name}`}
          />
          <p>
            {name} - R$ {value?.toFixed(2)} <span>Kg</span>
          </p>
        </div>
        <div>
          <IconButton
            color='secondary'
            onClick={() => removeProduct(id)}
          >
            <RemoveIcon />
          </IconButton>
          { cartProduct?.amount || 0}
          <IconButton 
            color='primary'
            onClick={() => addProduct({ name, photo, id, value })}
          >
            <AddIcon />
          </IconButton>
        </div>
      </Container>
  )
}

export default memo(Produto)