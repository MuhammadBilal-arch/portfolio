import React, { Component } from "react";
import classes from "./Sidebar.module.css";
import ProfileImage from "./ProfileImg.jpg";

// const MyContext = React.createContext();

export default class Sidebar extends Component {
  state = {
    enable: false,
    LiItem: "AboutMe",
  };

  OnClickButton = () => {
    this.state.enable
      ? this.setState({ enable: false })
      : this.setState({ enable: true });
  };

  OnClickMenu = (text) => {
    return this.state.LiItem !== text ? this.setState({ LiItem: text }) : null;
  };

  render() {
    const data = (
      <>
        <div className={classes.SidebarImage}>
          <img src={ProfileImage} alt="" />
        </div>
        <h2>Muhammad Bilal</h2>
        <h5>Web Developer</h5>
        <ul className={classes.SidebarUL}>
          <li
            className={
              this.state.LiItem === "AboutMe"
                ? classes.SideBarLiActive
                : null
            }
            onClick={() => this.OnClickMenu("AboutMe")}
          >
            <a href="#About">About Me</a>
          </li>
          <li
            className={
              this.state.LiItem === "Skills"
                ? classes.SideBarLiActive
                : null
            }
            onClick={() => this.OnClickMenu("Skills")}
          >
            <a href="#Skills">What I'm good at</a>
          </li>
          <li
            className={
              this.state.LiItem === "MyWork"
                ? classes.SideBarLiActive
                : null
            }
            onClick={() => this.OnClickMenu("MyWork")}
          >
            <a href="#MyWork">My Work</a>
          </li>
          <li
            className={
              this.state.LiItem === "ContactMe"
                ? classes.SideBarLiActive
                : null
            }
            onClick={() => this.OnClickMenu("ContactMe")}
          >
            <a href="#Contact">Contact Me</a>
          </li>
        </ul>
      </>
    );
    return (
      <>

        <div
          className={classes.SidebarBox}
          onClick={() => this.OnClickButton()}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        {this.state.enable ? (
          <div className={classes.SideResponsivebar}>{data}</div>
        ) : (
          <div className={classes.Sidebar}>{data}</div>
        )}
      </>
    );
  }
}
