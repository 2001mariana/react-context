import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Feira from 'pages/Feira'
import Login from 'pages/Login'

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
                    <Feira />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router