import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login, MainApp, Register } from '../../pages';

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
                    <MainApp />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
