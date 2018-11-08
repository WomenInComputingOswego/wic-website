import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import HomePage from './components/HomePageComponent/HomePageComponent.jsx';
import LearnMore from './components/LearnMoreComponent/LearnMore.jsx';

class Router extends Component {
    render() {
        return (
            <HashRouter>
                <div style={{ height: "100%" }}>
                    <Route exact path="/" component={LearnMore} />
                </div>
            </HashRouter>
        )
    }
}

export default Router;