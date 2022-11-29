import { Button } from '@material-ui/core';
import { Input, InputAdornment, InputLabel } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { UsuarioContext } from 'commom/context/Usuario';

import { Container, InputContainer, Titulo } from './styles';

function Login({ nome, setNome, saldo, setSaldo }) {
  const history = useHistory();

  return (
    <Container>
      <UsuarioContext.Consumer>
      {}
      </UsuarioContext.Consumer>
    </Container>
  )
};

export default Login;