import { createContext, useState } from 'react'

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Usuário";

export const CarrinhoProvider = ({ children }) => {
    const [] = useState

    return (
        <CarrinhoContext.Provider>
          { children }  
        </CarrinhoContext.Provider>
    )
}