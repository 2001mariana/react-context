import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Carrinho from 'pages/Carrinho'
import Feira from 'pages/Feira'
import Login from 'pages/Login'
import { UsuarioProvider } from 'commom/context/Usuario'

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                <UsuarioProvider
                    
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