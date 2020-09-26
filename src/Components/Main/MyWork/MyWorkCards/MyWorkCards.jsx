import React, { Component } from "react";
import classes from "./MyWorkCards.module.css";
import Backdrop from '../../../Backdrop/Backdrop'

export default class MyWorkCards extends Component {
  state = {
    SearchItem: "All",
    ImgLink: null,
    Clicked: false,
  };

  OnClickMenu = (text) => {
    return this.state.SearchItem !== text
      ? this.setState({ SearchItem: text })
      : null;
  };

  OnClickButton = (text) => {
    // console.log(text);
    this.setState({ ImgLink: text, Clicked: true });
  };

  render() {
    return (
      <>
          {
            this.state.Clicked ?
            <Backdrop Clicked = {this.state.Clicked} Link = {this.state.ImgLink}></Backdrop>
            : null
          }
          <div className={classes.WorkCardHolder}>
            <ul className={classes.WorkCardUL}>
              <li
                className={
                  this.state.SearchItem === "All"
                    ? classes.WorkCardLiActive
                    : classes.WorkCardLiNotActive
                }
                onClick={() => this.OnClickMenu("All")}
              >
                All
              </li>
              <li
                className={
                  this.state.SearchItem === "People"
                    ? classes.WorkCardLiActive
                    : classes.WorkCardLiNotActive
                }
                onClick={() => this.OnClickMenu("People")}
              >
                People
              </li>
              <li
                className={
                  this.state.SearchItem === "Nature"
                    ? classes.WorkCardLiActive
                    : classes.WorkCardLiNotActive
                }
                onClick={() => this.OnClickMenu("Nature")}
              >
                Nature
              </li>
              <li
                className={
                  this.state.SearchItem === "Animals"
                    ? classes.WorkCardLiActive
                    : classes.WorkCardLiNotActive
                }
                onClick={() => this.OnClickMenu("Animals")}
              >
                Animals
              </li>
            </ul>
            {this.props.data.map((item, index) => {
              return item.Name === this.state.SearchItem ? (
                <div key={index} className={classes.WorkCard}>
                  <div className={classes.WorkCardImage}>
                    <img src={item.ImageLink} alt={item.Name} />
                    <div className={classes.WorkCardEffect}>
                      <i
                        className="fas fa-search fa-2x"
                        // onClick={() => this.OnClickButton(item.ImageLink)}
                      ></i>
                      <h3>{item.Heading}</h3>
                      <p>{item.paragraph}</p>
                    </div>
                  </div>
                  <hr />
                </div>
              ) : this.state.SearchItem === "All" ? (
                <div key={index} className={classes.WorkCard}>
                  <div className={classes.WorkCardImage}>
                    <img src={item.ImageLink} alt={item.Name} />
                    <div className={classes.WorkCardEffect}>
                      <i
                        className="fas fa-search fa-2x"
                        // onClick={() => this.OnClickButton(item.ImageLink)}
                      ></i>
                      <h3>{item.Heading}</h3>
                      <p>{item.paragraph}</p>
                    </div>
                  </div>
                  <hr />
                </div>
              ) : null;
            })}
          </div>
      </>
    );
  }
}
