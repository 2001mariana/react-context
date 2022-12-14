import { useContext } from 'react';

import { UsuarioContext } from 'commom/context/Usuario';
import Produto from 'components/Produto';

import feira from './feira.json';
import NavBar from './NavBar';
import { Container, Header, Lista } from './styles';

function Feira() {
  const {nome, saldo} = useContext(UsuarioContext)
  
  return (
    <Container>
      <NavBar />
      <Header>
        <div>
          <h2> Olá, {nome}!</h2>
          <h3> Saldo: R$ {saldo}</h3>
        </div>
        <p>Encontre os melhores produtos orgânicos!</p>
      </Header>
      <Lista>
        <h2>
          Produtos:
        </h2>
        {feira.map(produto => (
          <Produto
            {...produto}
            key={produto.id}
          />
        ))}
      </Lista>
    </Container>
  )
}

export default Feira;