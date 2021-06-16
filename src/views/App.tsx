import React, {memo} from 'react';
// @ts-ignore
import {Route, Switch} from "react-router-dom";
import HomeView from "./home-view/HomeView";
import ResultView from "./result-view/ResultView";
import SelectView from "./select-view/SelectView";
import AboutView from "./about-view/AboutView";

const App = () => (
    <Switch>
        <Route path="/">
            <HomeView/>
        </Route>
        <Route path="/about">
            <AboutView/>
        </Route>
        <Route path="/select">
            <SelectView/>
        </Route>
        <Route path="/result">
            <ResultView/>
        </Route>
    </Switch>
);

App.displayName = 'App';

export default memo(App);
