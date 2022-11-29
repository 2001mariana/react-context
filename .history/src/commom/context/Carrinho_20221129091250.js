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

    function adicionarProduto(novoProduto) {
        const temOProduto  = carrinho.some(itemDoCarrinho => itemDoCarrinho.id === novoProduto.id)
    
        if(!temOProduto) {
          novoProduto.quantidade = 1;
    
          return  setCarrinho(carrinhoAnterior => [...carrinhoAnterior, novoProduto])
        }
    
        setCarrinho(carrinhoAnterior => carrinhoAnterior.map(itemDoCarrinho => {
          if(itemDoCarrinho.id === novoProduto.id) itemDoCarrinho.quantidade += 1;
    
          return itemDoCarrinho;
        }))
        
    }

    function removerProduto(idProduto) {
        const temOProduto  = carrinho.some(itemDoCarrinho => itemDoCarrinho.id === idProduto)
        const produtoNoCarrinho = carrinho.filter(itemDoCarrinho => itemDoCarrinho.id === idProduto
    
        if(!temOProduto) {    
          return setCarrinho(carrinhoAnterior => carrinhoAnterior.filter(itemDoCarrinho => itemDoCarrinho.id !== idProduto))
        }

        if(temOProduto && carrinho.map(it)) {    
          return setCarrinho(carrinhoAnterior => carrinhoAnterior.filter(itemDoCarrinho => itemDoCarrinho.id !== idProduto))
        }

    
        setCarrinho(carrinhoAnterior => carrinhoAnterior.map(itemDoCarrinho => {
          if(itemDoCarrinho.id === idProduto && itemDoCarrinho.quantidade > 0) itemDoCarrinho.quantidade -= 1;
    
          return itemDoCarrinho;
        }))
        
      }

    return { carrinho, setCarrinho, adicionarProduto, removerProduto }
}