import React, { Component } from "react";
import './FooterComponent.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                    <img className="footer-image" src={require("../../assets/email-wic.jpg")} alt="email"></img>
                    <img className="footer-image" src={require("../../assets/insta-wic.png")} alt="instagram"></img>
                    <img className="footer-image" src={require("../../assets/ozlogo-wic.png")} alt="lakerlife"></img>
            </div>
        )
    }
}
export default Footer;