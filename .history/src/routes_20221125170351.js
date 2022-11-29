import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from 'pages/Login'

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route>
                    <Login />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}