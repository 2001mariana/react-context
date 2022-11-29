import { Button } from '@material-ui/core';
import { Input, InputAdornment, InputLabel } from '@material-ui/core';
import { UsuarioContext } from 'commom/context/Usuario';
import { useHistory } from 'react-router-dom';

import { Container, InputContainer, Titulo } from './styles';

function Login({ nome, setNome, saldo, setSaldo }) {
  const history = useHistory();

  return (
    <Container>
      <UsuarioContext.
      <Titulo>
        Insira o seu nome
      </Titulo>
      <InputContainer>
        <InputLabel>
          Nome
        </InputLabel>
        <Input
          value={nome}
          type="text"
          onChange={(event) => setNome(event.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>
          Saldo
        </InputLabel>
        <Input
          value={saldo}
          type="number"
          onChange={(event) => setSaldo(event.target.value)}
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
        onClick={() => history.push('/feira')}
      >
        Avançar
      </Button>
    </Container>
  )
};

export default Login;