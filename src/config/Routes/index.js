import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login, Register, Home } from '../../pages';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
