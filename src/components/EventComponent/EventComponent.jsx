import React, { Component } from "react";
import './EventComponent.css';

class Event extends Component{
    render(){
        return(
            <div>
                <div className="title">Events</div>
                <div className="flex-container">
                    <div className="textblock1">RSVP</div>
                    <div className="textblock2">RSVP</div>
                    <div className="textblock3">Check this out</div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}

export default Event;