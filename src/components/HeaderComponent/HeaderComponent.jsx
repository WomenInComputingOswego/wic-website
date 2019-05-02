import React, { Component } from "react";
import './HeaderComponent.css';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        }

        this.showAboutMenu = this.showAboutMenu.bind(this);
        this.showEventsMenu = this.showEventsMenu.bind(this);
        this.showResourcesMenu = this.showResourcesMenu.bind(this);
        this.showAlumniMenu = this.showAlumniMenu.bind(this);
        this.showContactMenu = this.showContactMenu.bind(this);
        this.closeAboutMenu = this.closeAboutMenu.bind(this);
        this.closeEventsMenu = this.closeEventsMenu.bind(this);
        this.closeResourcesMenu = this.closeResourcesMenu.bind(this);
        this.closeAlumniMenu = this.closeAlumniMenu.bind(this);
        this.closeContactMenu = this.closeContactMenu.bind(this);


    }

    showAboutMenu(event) {
        event.preventDefault();

        this.setState({ showAboutMenu: true }, () => {
            document.addEventListener('click', this.closeAboutMenu);
        });
    }

    showEventsMenu(event) {
        event.preventDefault();

        this.setState({ showEventsMenu: true }, () => {
            document.addEventListener('click', this.closeEventsMenu);
        });
    }

    showResourcesMenu(event) {
        event.preventDefault();

        this.setState({ showResourcesMenu: true }, () => {
            document.addEventListener('click', this.closeResourcesMenu);
        });
    }

    showAlumniMenu(event) {
        event.preventDefault();

        this.setState({ showAlumniMenu: true }, () => {
            document.addEventListener('click', this.closeAlumniMenu);
        });
    }

    showContactMenu(event) {
        event.preventDefault();

        this.setState({ showContactMenu: true }, () => {
            document.addEventListener('click', this.closeContactMenu);
        });
    }

    closeAboutMenu(event) {
        if (!this.dropdownMenu.contains(event.target)) {
            this.setState({ showAboutMenu: false }, () => {
                document.removeEventListener('click', this.closeAboutMenu);
            });
        }
    }

    closeEventsMenu(event) {
        if (!this.dropdownMenu.contains(event.target)) {
            this.setState({ showEventsMenu: false }, () => {
                document.removeEventListener('click', this.closeEventsMenu);
            });
        }
    }

    closeResourcesMenu(event) {
        if (!this.dropdownMenu.contains(event.target)) {
            this.setState({ showResourcesMenu: false }, () => {
                document.removeEventListener('click', this.closeResourcesMenu);
            });
        }
    }

    closeAlumniMenu(event) {
        if (!this.dropdownMenu.contains(event.target)) {
            this.setState({ showAlumniMenu: false }, () => {
                document.removeEventListener('click', this.closeAlumniMenu);
            });
        }
    }

    closeContactMenu(event) {
        if (!this.dropdownMenu.contains(event.target)) {
            this.setState({ showContactMenu: false }, () => {
                document.removeEventListener('click', this.closeContactMenu);
            });
        }
    }

    render() {
        return (
            <div className="container">
                <img className="logo" src={require("./logo.png")} alt="Ada Lovelace Hackathon" ></img>
                <div className="container-right">
                    <div onClick={this.showAboutMenu}>About us</div>
                    {
                        this.state.showAboutMenu
                            ? (
                                <div className="menu"
                                    ref={(element) => {
                                        this.dropdownMenu = element;
                                    }}
                                >
                                    <div>Menu Item 1</div>
                                    <div>Menu Item 2</div>
                                    <div>Menu Item 3</div>
                                </div>
                            )
                            : (
                                null
                            )
                    }
                    <div onClick={this.showEventsMenu}>Events</div>
                    {
                        this.state.showEventsMenu
                            ? (
                                <div className="menu"
                                    ref={(element) => {
                                        this.dropdownMenu = element;
                                    }}
                                >
                                    <div>Menu Item 1</div>
                                    <div>Menu Item 2</div>
                                    <div>Menu Item 3</div>
                                </div>
                            )
                            : (
                                null
                            )
                    }
                    <div onClick={this.showResourcesMenu}>Resources</div>
                    {
                        this.state.showResourcesMenu
                            ? (
                                <div className="menu"
                                    ref={(element) => {
                                        this.dropdownMenu = element;
                                    }}
                                >
                                    <div>Menu Item 1</div>
                                    <div>Menu Item 2</div>
                                    <div>Menu Item 3</div>
                                </div>
                            )
                            : (
                                null
                            )
                    }
                    <div onClick={this.showAlumniMenu}>Alumni</div>
                    {
                        this.state.showAlumniMenu
                            ? (
                                <div className="menu"
                                    ref={(element) => {
                                        this.dropdownMenu = element;
                                    }}
                                >
                                    <div>Menu Item 1</div>
                                    <div>Menu Item 2</div>
                                    <div>Menu Item 3</div>
                                </div>
                            )
                            : (
                                null
                            )
                    }
                    <div onClick={this.showContactMenu}>Contact</div>
                    {
                        this.state.showContactMenu
                            ? (
                                <div className="menu"
                                    ref={(element) => {
                                        this.dropdownMenu = element;
                                    }}
                                >
                                    <div>Menu Item 1</div>
                                    <div>Menu Item 2</div>
                                    <div>Menu Item 3</div>
                                </div>
                            )
                            : (
                                null
                            )
                    }
                </div>
            </div>
        )
    }
}

export default HeaderComponent;