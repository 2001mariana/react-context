import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { ReactComponent as Logo } from 'assets/logo.svg';
import { useCarrinhoContext } from 'commom/context/Carrinho';

import { Nav } from './styles';

export default function NavBar() {
  const { quantidadeProdutos } = useCarrinhoContext();
  
  return (
    <Nav>
      <Logo />
      <IconButton dis>
        <Badge
          color="primary"
          badgeContent={quantidadeProdutos}
        >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
  )
}