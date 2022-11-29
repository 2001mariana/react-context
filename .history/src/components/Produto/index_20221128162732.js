import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { memo, useContext } from 'react';

import { CarrinhoContext } from 'commom/context/Carrinho';

import { Container } from './styles';

function Produto({
  nome,
  foto,
  id,
  valor,
  unidade
}) {
  const { carrinho, setCarrinho } = useContext(CarrinhoContext)

  return (
      <Container>
        <div>
          <img
            src={`/assets/${foto}.png`}
            alt={`foto de ${nome}`}
          />
          <p>
            {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
          </p>
        </div>
        <div>
          <IconButton
            color="secondary"
          >
            <RemoveIcon />
          </IconButton>
          <IconButton onClick={() => {
            setCarrinho(carrinhoAnterior => [...carrinhoAnterior, { nome, foto, id, valor}])
          }}>
            <AddIcon />
          </IconButton>
        </div>
      </Container>
  )
}

export default memo(Produto)