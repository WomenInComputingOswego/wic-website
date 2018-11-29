import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import Event from './components/EventComponent/EventComponent.jsx';

class Router extends Component {
    render() {
        return (
            <HashRouter>
                <div style={{ height: "100%" }}>
                    <Route exact path="/" component={Event} />
                </div>
            </HashRouter>
        )
    }
}

export default Router;