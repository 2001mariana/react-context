import { createContext, useContext, useState } from 'react'

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";

export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);

    return (
        <CarrinhoContext.Provider value={{carrinho, setCarrinho}}>
          { children }  
        </CarrinhoContext.Provider>
    )
}

export const useCarrinhoContext = () => {
    const {carrinho, setCarrinho} = useContext(CarrinhoContext)

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
    
        setCarrinho(mud)
        
    }

    function removerProduto(idProduto) {
        const temOProduto  = carrinho.some(itemDoCarrinho => itemDoCarrinho.id === idProduto)

        if(!temOProduto) {    
          return setCarrinho(carrinhoAnterior => carrinhoAnterior.filter(itemDoCarrinho => itemDoCarrinho.id !== idProduto))
        }

        setCarrinho(carrinhoAnterior => carrinhoAnterior.map(itemDoCarrinho => {
          if(itemDoCarrinho.id === idProduto && itemDoCarrinho.quantidade > 0) itemDoCarrinho.quantidade -= 1;
          return itemDoCarrinho;
        }))

        removeProdutoDeQuantidadeZero()
      }

    return { carrinho, setCarrinho, adicionarProduto, removerProduto }
}