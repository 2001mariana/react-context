import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { UsuarioContext } from 'commom/context/Usuario'
import Carrinho from 'pages/Carrinho'
import Feira from 'pages/Feira'
import Login from 'pages/Login'

function Router() {
    const [nome, setNome] = useState('')
    const [saldo, setSaldo] = useState(0)

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <UsuarioContext.Provider value={{nome, setNome, saldo, setSaldo}}>
                      <Login />  
                    </UsuarioContext.Provider>
                    
                </Route>
                <Route path={"/feira"}>
                    <Feira />
                </Route>
                <Route path={"/carrinho"}>
                    <Carrinho />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router