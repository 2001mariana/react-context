import { createContext } from 'react'

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Usuário";

export const CarrinhoProvider = ({ children }) => {

    return (
        <CarrinhoContext.Provider>
          { children }  
        </CarrinhoContext.Provider>
    )
}