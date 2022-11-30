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
              <CarrinhoProvider>
                <Route path={"/feira"}>
                    <Feira />
                </Route>              
              </CarrinhoProvider>
            </UsuarioProvider>
            </Switch>
        </BrowserRouter>
    )
}

export default Router