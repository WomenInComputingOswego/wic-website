import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from './components/HomePageComponent/HomePageComponent.jsx';

class Router extends Component {
    render() {
        return (
            <HashRouter>
                <div style={{ height: "100%" }}>
                    <Route exact path="/" component={Home} />
                </div>
            </HashRouter>
        )
    }
}

export default Router;