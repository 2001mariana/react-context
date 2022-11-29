import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { memo } from 'react';

import { useCarrinhoContext } from 'commom/context/Carrinho';

import { Container } from './styles';

function Produto({
  nome,
  foto,
  id,
  valor,
  unidade
}) {
  const { carrinho, adicionarProduto, removerProduto } = useCarrinhoContext();
  const produtoNoCarrinho = carrinho.find(itemDoCarrinho => itemDoCarrinho.id === id);

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
            onClick={() => {adicionarProduto({ nome, foto, id, valor})}}
          >
            <RemoveIcon />
          </IconButton>
          {produtoNoCarrinho?.quantidade || 0}
          <IconButton onClick={() => {adicionarProduto({ nome, foto, id, valor})}}>
            <AddIcon />
          </IconButton>
        </div>
      </Container>
  )
}

export default memo(Produto)