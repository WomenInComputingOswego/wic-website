import React, { Component } from "react";
import Event from '../EventComponent/EventComponent.jsx';
import Purpose from '../PurposeSectionComponent/PurposeSectionComponent.jsx';
import Footer from '../FooterComponent/FooterComponent.jsx';

class HomePage extends Component{
    render(){
        return(
            <div>
                <Purpose/>
                <Event/>
                <Footer/>
            </div>
        )
    }
}

export default HomePage;