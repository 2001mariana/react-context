import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Feira from 'pages/Feira'
import Login from 'pages/Login'
import Carrinho from 'pages/Carrinho'

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <Login />
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