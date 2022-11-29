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
                <Route path={"/"}>
                    <Feira> />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router