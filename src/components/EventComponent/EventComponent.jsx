import React, { Component } from "react";
import './EventComponent.css';

class Event extends Component{
    render(){
        return(
            <div>
                <div className="title">Events</div>
                <div className="flex-container2">
                    <div className="image"><img src="IMG_1789.jpg" alt="Ada Lovelace Hackathon"></img></div>
                    <div className="image"><img src="IMG_1563.jpg" alt="Women in Computing"></img></div>
                    <div className="image"><img src="IMG_1730.jpg" alt="Memory"></img></div>
                </div>
                <div className="flex-container1">
                    <div className="textblock1">RSVP</div>
                    <div className="textblock2">RSVP</div>
                    <div className="textblock3">More...</div>
                </div>
            </div>
        )
    }
}

export default Event;