import React, { Component } from "react";
import './PurposeSectionComponent.css';

class Purpose extends Component{
    render(){
        return(
            <div>
            <div className="purpose-title">Purpose</div>
                <div className="purpose-flex-container2">
                    <img className="purpose-image" src={require("./download (2).jpg")} alt="Ada Lovelace Hackathon" ></img>
                    <img className="purpose-image" src={require("./download.jpg")} alt="Women in Computing"></img>
                    <img className="purpose-image" src={require("./download (1).jpg")} alt="Memory"></img>
                </div>
                <div className="purpose-flex-container1">
                    <div className="purpose-textblock">Creating a support system</div>
                    <div className="purpose-textblock">Providing members with a professional network of female engineers</div>
                    <div className="purpose-textblock">Serving the community</div>
                </div>
            </div>
        )
    }
}

export default Purpose;