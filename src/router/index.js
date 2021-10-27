import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//pages
import Home from '../pages/nonuserpages/Home';
import Login from '../pages/nonuserpages/Login';
import Register from '../pages/nonuserpages/Register';

export default function RouterComponent() {

    return (
        <>
            <Router>
                <Switch>
                    <Route exact component={Home} path="/" />
                    <Route exact component={Login} path="/login" />
                    <Route exact component={Register} path="/register" />
                </Switch>
            </Router>
        </>

    )
}
