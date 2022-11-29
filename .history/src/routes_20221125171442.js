import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from 'pages/Login'
import Feira from 'pages/Feira'

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <Login />
                </Route>
                <Route path={"/"}>
                    <Feira> />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router