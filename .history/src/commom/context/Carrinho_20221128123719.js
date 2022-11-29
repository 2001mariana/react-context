import { createContext} from 'react'

export const UsuarioContext = createContext();
UsuarioContext.displayName = "Usuário";

export const UsuarioProvider = ({ children }) => {

    return (
        <UsuarioContext.Provider>
          { children }  
        </UsuarioContext.Provider>
    )
}