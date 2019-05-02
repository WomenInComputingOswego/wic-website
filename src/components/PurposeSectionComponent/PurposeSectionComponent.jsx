import React, { Component } from "react";
import './PurposeSectionComponent.css';

class Purpose extends Component{
    render(){
        return(
            <div>
            <div className="title">Purpose</div>
                <div className="flex-container2">
                    <img className="image" src={require("./download (2).jpg")} alt="Ada Lovelace Hackathon" ></img>
                    <img className="image" src={require("./download.jpg")} alt="Women in Computing"></img>
                    <img className="image" src={require("./download (1).jpg")} alt="Memory"></img>
                </div>
                <div className="flex-container1">
                    <div className="textblock">Creating a support system</div>
                    <div className="textblock">Providing members with a professional network of female engineers</div>
                    <div className="textblock">Serving the community</div>
                </div>
            </div>
        )
    }
}

export default Purpose;