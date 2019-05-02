import React, { Component } from "react";
import './FooterComponent.css';

class Footer extends Component {
    render() {
        return (
            <div className="container">
                <div className="footer">
                    <img className="image" src={require("../../assets/email-wic.jpg")} alt="email"></img>
                    <img className="image" src={require("../../assets/insta-wic.png")} alt="instagram"></img>
                    <img className="image" src={require("../../assets/ozlogo-wic.png")} alt="lakerlife"></img>
                </div>
            </div>
        )
    }
}
export default Footer;