import { createContext, useState } from 'react'

export const PagamentoContext = createContext();
PagamentoContext.displayName = "Pagamento";

export const PagamentoProvider = ({ children }) => {
    const tiposPagamento = [{
        nome: "Boleto",
        juros: 1,
        id: 1
    }, {
        nome: "Cartão de Crédito",
        juros: 2,
        id: 2
    }, {
        nome: "PIX",
        juros: 1,
        id: 3
    }]

    return (
        <PagamentoContext.Provider value={{nome, setNome, saldo, setSaldo}}>
          { children }  
        </PagamentoContext.Provider>
    )
}