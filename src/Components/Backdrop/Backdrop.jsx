import React, { Component } from "react";
import classes from "./Backdrop.module.css";

export default class Backdrop extends Component {
  render() {
    return (
          <div className={ this.props.Clicked? classes.Backdrop : classes.BackdropNotActive}>
            <div className={classes.BackdropImage}>
              <img src= {this.props.Link} alt="" />
            </div>
          </div>
    );
  }
}
