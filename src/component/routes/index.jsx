import React from 'react';
import {createBrowserHistory} from 'history';

import {
    Router,
    Route,
    Switch
} from "react-router-dom";
import Dashboard from "../dashboard";

const history = createBrowserHistory();

function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Dashboard}/>
            </Switch>
        </Router>
    );
}

export default Routes;