import { createContext, useState } from 'react'

export const UsuarioContext = createContext();
UsuarioContext.displayName = "Usuário";

export const UsuarioProvider = ({ children }) => {

    return (
        <UsuarioContext.Provider value={{nome, setNome, saldo, setSaldo}}>
          { children }  
        </UsuarioContext.Provider>
    )
}