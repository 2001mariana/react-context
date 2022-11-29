import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { UsuarioContext } from 'commom/context/Usuario'
import Carrinho from 'pages/Carrinho'
import Feira from 'pages/Feira'
import Login from 'pages/Login'

function Router() {
    const [nome, setNome] = useState('')
    const [saldo, setSaldo] = useState(0)

    useEffect(() => {
        console.log(nome, saldo)
    }, [nome, saldo])

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <UsuarioContext
                    <Login 
                        nome={nome} 
                        setNome={setNome} 
                        saldo={saldo}
                        setSaldo={setSaldo}
                    />
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