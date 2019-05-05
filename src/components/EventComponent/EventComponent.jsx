import React, { Component } from "react";
import './EventComponent.css';

class Event extends Component {
    render() {
        return (
            <div>
                <div className="event-title">Events</div>
                <div className="event-flex-container2">
                    <img className="event-image" src={require("./IMG_1789.jpg")} alt="Ada Lovelace Hackathon" ></img>
                    <img className="event-image" src={require("./IMG_1563.jpg")} alt="Women in Computing"></img>
                    <img className="event-image" src={require("./IMG_1730.jpg")} alt="Memory"></img>
                </div>
                <div className="event-flex-container1">
                    <div className="event-textblock1">RSVP</div>
                    <div className="event-textblock2">RSVP</div>
                    <div className="event-textblock3">Check this out</div>
                </div>
            </div>
        )
    }
}

export default Event;