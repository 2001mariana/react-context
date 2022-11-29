import { Button } from '@material-ui/core';
import { Input, InputAdornment, InputLabel } from '@material-ui/core';

import { Container, InputContainer, Titulo } from './styles';

function Login({ nome, setNome }) {
  return (
    <Container>
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
          onChange={(event) => event.tar}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>
          Saldo
        </InputLabel>
        <Input
        type="number"
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
      >
        Avançar
      </Button>
    </Container>
  )
};

export default Login;