import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react'

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";

export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);
    const [quantidadeProdutos, setQuantidadeProdutos] = useState(0);
    const [valorTotalCarrinho, setValorTotalCarrinho] = useState(0);

    return (
        <CarrinhoContext.Provider value={{
          carrinho, 
          setCarrinho, 
          quantidadeProdutos, 
          setQuantidadeProdutos, 
          valorTotalCarrinho, 
          setValorTotalCarrinho
        }}>
          { children }  
        </CarrinhoContext.Provider>
    )
}

export const useCarrinhoContext = () => {
    const {carrinho, setCarrinho, quantidadeProdutos, setQuantidadeProdutos, valorTotalCarrinho, setValorTotalCarrinho} = useContext(CarrinhoContext)

    function mudarQuantidade(id, quantidade) {
      return carrinho.map(itemDoCarrinho => {
        if(itemDoCarrinho.id === id) itemDoCarrinho.quantidade += quantidade;
        return itemDoCarrinho;
      })
    }

    function removeProdutoDeQuantidadeZero() {
      setCarrinho(carrinhoAnterior => carrinhoAnterior.filter(itemDoCarrinho => itemDoCarrinho.quantidade > 0))
    }

    function adicionarProduto(novoProduto) {
        const temOProduto  = carrinho.some(itemDoCarrinho => itemDoCarrinho.id === novoProduto.id)
    
        if(!temOProduto) {
          novoProduto.quantidade = 1;
    
          return  setCarrinho(carrinhoAnterior => [...carrinhoAnterior, novoProduto])
        }
    
        setCarrinho(mudarQuantidade(novoProduto.id, 1))
        
    }

    function removerProduto(idProduto) {
        const temOProduto  = carrinho.some(itemDoCarrinho => itemDoCarrinho.id === idProduto)

        if(!temOProduto) {    
          return setCarrinho(carrinhoAnterior => carrinhoAnterior.filter(itemDoCarrinho => itemDoCarrinho.id !== idProduto))
        }

        setCarrinho(mudarQuantidade(idProduto, -1))
        
        removeProdutoDeQuantidadeZero()
      }

      useEffect(() => {
        const { novoTotal, novaQuantidade } = carrinho.reduce((contador, produto) => ({
          novaQuantidade: contador.novaQuantidade + produto.quantidade,
          novoTotal: contador.novoTotal + ( produto.valor * produto.quantidade )
        }), {
          novaQuantidade: 0,
          novoTotal: 0
        })

        setQuantidadeProdutos(novaQuantidade);
        setValorTotalCarrinho(novoTotal);

      }, [carrinho, setQuantidadeProdutos, setValorTotalCarrinho]);

    return { carrinho, setCarrinho, adicionarProduto, removerProduto, quantidadeProdutos, valorTotalCarrinho }
}