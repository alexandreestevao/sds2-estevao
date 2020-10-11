import React from 'react'

import Home from '../views/home'
import ConsultUsers from '../views/users/consultUsers'
import RegisterUsers from '../views/users/registerUsers'

import { Route, Switch, HashRouter } from 'react-router-dom';

function Routers() {
    return(
        <HashRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/home" component={Home} />
                <Route path="/consult-user" component={ConsultUsers} />
                <Route path="/register-user/:id?" component={RegisterUsers} />
            </Switch>
        </HashRouter>
    )
}

export default Routers;