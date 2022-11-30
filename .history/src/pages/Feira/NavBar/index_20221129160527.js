import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useHistory } from 'react-router-dom';

import { ReactComponent as Logo } from 'assets/logo.svg';
import { useCarrinhoContext } from 'commom/context/Carrinho';

import { Nav } from './styles';

export default function NavBar() {
  const { quantidadeProdutos } = useCarrinhoContext();
  const history = useHistory();
  
  return (
    <Nav>
      <Logo />
      <IconButton disabled={quantidadeProdutos === 0}>
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