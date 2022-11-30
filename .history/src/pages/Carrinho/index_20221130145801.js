import { Button, InputLabel, MenuItem, Select, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useCarrinhoContext } from 'commom/context/Carrinho';
import { usePagamentoContext } from 'commom/context/Pagamento';
import { UsuarioContext } from 'commom/context/Usuario';
import Produto from 'components/Produto';

import { Container, PagamentoContainer, TotalContainer, Voltar } from './styles';

function Carrinho() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { carrinho, valorTotalCarrinho  } = useCarrinhoContext();
  const { saldo = 0 } = useContext(UsuarioContext);
  const { formaPagamento, tiposPagamento, mudarFormaPagamento} = usePagamentoContext()
  const history = useHistory();
  
  
  return (
    <Container>
      <Voltar onClick={() => history.goBack()}/>
      <h2>
        Carrinho
      </h2>
      {carrinho.map(produto => (
        <Produto {...produto} key={produto.id} />
      ))}
      <PagamentoContainer>
        <InputLabel> Forma de Pagamento </InputLabel>
        <Select value={formaPagamento.id} onChange={(event) => mudarFormaPagamento(event.target.value)}>
          {
            tiposPagamento.map(pagamento => (
              <MenuItem
                value={pagamento.id}
                key={pagamento.id}
              >
                {pagamento.nome}
              </MenuItem>
            ))
          }
        </Select>


      </PagamentoContainer>
      <TotalContainer>
          <div>
            <h2>Total no Carrinho: </h2>
            <span>R$ {valorTotalCarrinho.toFixed(2)}</span>
          </div>
          <div>
            <h2> Saldo: </h2>
            <span> R$ { (saldo - valorTotalCarrinho).toFixed(2) }</span>
          </div>
          <div>
            <h2> Saldo Total: </h2>
            <span> R$ { saldo }</span>
          </div>
        </TotalContainer>
      <Button
        onClick={() => {
          setOpenSnackbar(true);
        }}
        color="primary"
        variant="contained"
        disabled={total < 0}
      >
         Comprar
       </Button>
        <Snackbar
          anchorOrigin={
            { 
              vertical: 'top',
              horizontal: 'right'
            }
          }
          open={openSnackbar}
          onClose={() => setOpenSnackbar(false)}
        >
           <MuiAlert
            onClose={() => setOpenSnackbar(false)}
            severity="success"
          >
            Compra feita com sucesso!
          </MuiAlert>
        </Snackbar>
    </Container>
  )
}

export default Carrinho;