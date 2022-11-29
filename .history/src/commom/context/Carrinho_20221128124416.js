import { createContext } from 'react'

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Usuário";

export const CarrinhoProvider = ({ children }) => {
    const [] = use

    return (
        <CarrinhoContext.Provider>
          { children }  
        </CarrinhoContext.Provider>
    )
}