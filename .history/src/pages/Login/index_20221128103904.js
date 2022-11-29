import { Button } from '@material-ui/core';
import { Input, InputAdornment, InputLabel } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { UsuarioContext } from 'commom/context/Usuario';

import { Container, InputContainer, Titulo } from './styles';

function Login() {
  const history = useHistory();

  return (
    <Container>
      <UsuarioContext.Consumer>
      {({ nome, setNome, saldo, setSaldo }) => (
        <>
        
        </>
      )}
      </UsuarioContext.Consumer>
    </Container>
  )
};

export default Login;