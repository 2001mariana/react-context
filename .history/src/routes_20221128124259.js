import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { CarrinhoProvider } from 'commom/context/Carrinho'
import { UsuarioProvider } from 'commom/context/Usuario'
import Carrinho from 'pages/Carrinho'
import Feira from 'pages/Feira'
import Login from 'pages/Login'

function Router() {
    return (
        <BrowserRouter>
            <Switch>
            <UsuarioProvider>
                <Route exact path={"/"}>
                    <Login />  
                </Route>
              <CarrinhoProvider></CarrinhoProvider>
                <Route path={"/feira"}>
                    <Feira />
                </Route>
            </UsuarioProvider>
                <Route path={"/carrinho"}>
                    <Carrinho />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router