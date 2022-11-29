import { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Carrinho from 'pages/Carrinho'
import Feira from 'pages/Feira'
import Login from 'pages/Login'

function Router() {
    const [nome, setNome] = useState('')
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <Login nome={nome} setNome />
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