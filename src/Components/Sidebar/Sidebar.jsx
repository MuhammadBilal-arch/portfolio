import React, { Component } from "react";
import classes from "./Sidebar.module.css";
import ProfileImage from "./ProfileImg.jpg";

const MyContext = React.createContext();

export default class Sidebar extends Component {
  state = {
    enable: false,
  };

  OnClickButton = () => {
    this.state.enable
      ? this.setState({ enable: false })
      : this.setState({ enable: true });
  };

  render() {
    return (
      <>
        <MyContext.Provider value={this.state.enable}></MyContext.Provider>
        <div
          className={classes.SidebarBox}
          onClick={() => this.OnClickButton()}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      {this.state.enable?
                <div className={classes.SideResponsivebar}>
                <div className={classes.SidebarImage}>
                  <img src={ProfileImage} alt="" />
                </div>
                <h2>Muhammad Bilal</h2>
                <h5>Web Developer</h5>
                <ul className={classes.SidebarUL}>
                  <li>About Me</li>
                  <li>What I'm good at</li>
                  <li>My Work</li>
                  <li>Contact Me</li>
                </ul>
              </div>
            :
              <div className={classes.Sidebar}> 
                <div className={classes.SidebarImage}>
                  <img src={ProfileImage} alt="" />
                </div>
                <h2>Muhammad Bilal</h2>
                <h5>Web Developer</h5>
                <ul className={classes.SidebarUL}>
                  <li>About Me</li>
                  <li>What I'm good at</li>
                  <li>My Work</li>
                  <li>Contact Me</li>
                </ul>
              </div>

      }

      </>
    );
  }
}
