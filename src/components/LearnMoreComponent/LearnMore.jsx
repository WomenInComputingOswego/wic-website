import React, { Component } from "react";
import wicCoffee from '../../assets/wicCoffee.jpg';
import './LearnMore.css';

class LearnMore extends Component{
    render(){
        return(
            //header image and learn more link
            <div class="container">
                <img id="headerImage" src={wicCoffee} alt=""/>
                <div id="buttonContainer">
                    <button id="learnMoreButton">Learn More</button>
                </div>
            </div>
        
            
        )
    }
}

export default LearnMore;