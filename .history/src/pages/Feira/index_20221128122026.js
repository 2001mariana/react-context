import { useContext } from 'react';

import Produto from 'components/Produto';

import feira from './feira.json';
import NavBar from './NavBar';
import { Container, Header, Lista } from './styles';

function Feira() {
  const {nome, saldo} = useContext()
  
  return (
    <Container>
      <NavBar />
      <Header>
        <div>
          <h2> Olá!</h2>
          <h3> Saldo: R$</h3>
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