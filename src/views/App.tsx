import React, {memo} from 'react';
// @ts-ignore
import {Route, Switch} from "react-router-dom";

const App = () => (
    <Switch>
        <Route path="/">
            <p>Home</p>
        </Route>
        <Route path="/about">
            <p>About</p>
        </Route>
    </Switch>
);

App.displayName = 'App';

export default memo(App);
