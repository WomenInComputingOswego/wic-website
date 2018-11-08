import React, { Component } from "react";
import './EventComponent.css';

class Event extends Component {
    render() {
        return (
            <div>
                <div className="title">Events</div>
                <div className="flex-container2">
                    <img className="image" src={require("./IMG_1789.jpg")} alt="Ada Lovelace Hackathon" ></img>
                    <img className="image" src={require("./IMG_1563.jpg")} alt="Women in Computing"></img>
                    <img className="image" src={require("./IMG_1730.jpg")} alt="Memory"></img>
                </div>
                <div className="flex-container1">
                    <div className="textblock1">RSVP</div>
                    <div className="textblock2">RSVP</div>
                    <div className="textblock3">Check this out</div>
                </div>
            </div>
        )
    }
}

export default Event;