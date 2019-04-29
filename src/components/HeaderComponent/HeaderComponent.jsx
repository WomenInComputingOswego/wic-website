import React, { Component } from "react";
import './HeaderComponent.css';

class HeaderComponent extends Component {
    render() {
        return (
            <div className="container">
                <img className="logo" src={require("./logo.png")} alt="Ada Lovelace Hackathon" ></img>
                <div className="container-right">
                    <div>About us</div>
                    <div>Events</div>
                    <div>Resources</div>
                    <div>Alumni</div>
                    <div>Contact</div>
                </div>
            </div>
        )
    }
}

export default HeaderComponent;