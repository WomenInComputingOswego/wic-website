import React, { Component } from "react";
import wicCoffee from '../../assets/wicCoffee.jpg';

class LearnMore extends Component{
    render(){
        return(
            <div>
                <img src={wicCoffee}/>
                <div>
                    <button>Learn More</button>
                </div>
            </div>
        
            
        )
    }
}

export default LearnMore;