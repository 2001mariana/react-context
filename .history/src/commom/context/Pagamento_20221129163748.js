import { createContext, useState } from 'react'

export const PagamentoContext = createContext();
PagamentoContext.displayName = "Usuário";

export const PagamentoProvider = ({ children }) => {
    const [nome, setNome] = useState('')
    const [saldo, setSaldo] = useState(0)

    return (
        <PagamentoContext.Provider value={{nome, setNome, saldo, setSaldo}}>
          { children }  
        </PagamentoContext.Provider>
    )
}