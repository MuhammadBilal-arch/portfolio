import React, { Component } from "react";
import classes from "./SkillsCard.module.css";

export default class SkillsCard extends Component {
  render() {
    return <div className={classes.SkillCardHolder}>
        {this.props.data.map((item,index)=>
        {
          return (
              <div className={classes.SkillCard}>
                  <i class={item.logo}></i>
                  <h1 className={classes.skillheading}>{item.heading}</h1>
                  <p className={classes.SkillCardParagraph}>{item.paragraph}</p>
              </div>
          )  
        })}
    </div>;
  }
}
