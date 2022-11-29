import { Nav } from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useCartContext } from 'common/context/Cart';
import { useNavigate } from 'react-router-dom';

export function NavBar() {
  const { productAmount } = useCartContext();

  const navigate = useNavigate();

  return (
    <Nav>
      <Logo />
      <IconButton
        disabled={productAmount===0}
        onClick={() => {
          navigate('/cart');
        }}
      >
        <Badge
          overlap="rectangular"
          color="primary"
          badgeContent={productAmount}
        >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
  )
}