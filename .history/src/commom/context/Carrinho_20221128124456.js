import { createContext, useState } from 'react'

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Usuário";

export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);

    return (
        <CarrinhoContext.Provider value={{carrinho, set}}>
          { children }  
        </CarrinhoContext.Provider>
    )
}