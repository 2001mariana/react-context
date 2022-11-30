import { createContext, useState } from 'react'

export const PagamentoContext = createContext();
PagamentoContext.displayName = "Pagamento";

export const PagamentoProvider = ({ children }) => {
    const tiposPagamento = [{
        nome: "",
        juros: 
    }]

    return (
        <PagamentoContext.Provider value={{nome, setNome, saldo, setSaldo}}>
          { children }  
        </PagamentoContext.Provider>
    )
}