import { createContext, useState } from 'react'

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
    const [nome, setNome] = useState('')
    const [saldo, setSaldo] = useState(0)

    return (
        <UsuarioContext.Provider value={{nome, setNome, saldo, setSaldo}}>
                    
        </UsuarioContext.Provider>
    )

}