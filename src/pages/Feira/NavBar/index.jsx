import { Nav } from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useCartContext } from 'common/context/Cart';

export function NavBar() {
  const { productAmount } = useCartContext();

  return (
    <Nav>
      <Logo />
      <IconButton
        disabled={productAmount===0}
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