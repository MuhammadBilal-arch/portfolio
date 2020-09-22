import React, { Component } from "react";
import classes from "./About.module.css";
import AboutImage1 from "../../../bgimage.jpg";
import AboutImage2 from "../../../bgimage2.jpg";
export default class About extends Component {
  render() {
    return (
      <div className={classes.About}>
        <h1 className={classes.AboutHeading}>About Me</h1>
        <p>
          I'm Muhammad Bilal Chughtai and I'm Front End Developer with Html ,
          CSS , JavaScript and React.js
        </p>
        <div className={classes.AboutMenu}>
          <div className={classes.AboutMenuImg}>
            <img src={AboutImage1} alt="" />
          </div>
          <div className={classes.AboutMenuPg}>
            <h1>HTML CSS TEMPLATE</h1>
            <p>
              Donec tristique feugiat lacus, at sollicitudin nunc euismod sed.
              Mauris viverra, erat non sagittis gravida, elit dui mollis ante,
              sit amet eleifend purus ligula eget eros. Sed tincidunt quam vitae
              neque pharetra dignissim eget ut libero.
            </p>
            <button>Read More</button>
          </div>
        </div>
        <hr />
        <div className={classes.AboutMenu}>
        <div className={classes.AboutMenuPg}>
            <h1>HTML CSS TEMPLATE</h1>
            <p>
              Donec tristique feugiat lacus, at sollicitudin nunc euismod sed.
              Mauris viverra, erat non sagittis gravida, elit dui mollis ante,
              sit amet eleifend purus ligula eget eros. Sed tincidunt quam vitae
              neque pharetra dignissim eget ut libero.
            </p>
            <button>Read More</button>
          </div>
          <div className={classes.AboutMenuImg}>
            <img src={AboutImage2} alt="" />
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
