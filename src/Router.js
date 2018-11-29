import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import Outreach from './components/OutreachComponent/OutreachComponent.jsx';

class Router extends Component {
    render() {
        return (
            <HashRouter>
                <div style={{ height: "100%" }}>
                    <Route exact path="/" component={Outreach} />
                </div>
            </HashRouter>
        )
    }
}

export default Router;