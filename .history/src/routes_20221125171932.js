import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Carrinho from 'pages/Carrinho'
import Feira from 'pages/Feira'
import Login from 'pages/Login'

function Router() {
    const [nome, setNome]
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