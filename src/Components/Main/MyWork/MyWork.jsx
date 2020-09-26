import React, { Component } from "react";
import classes from "./MyWork.module.css";
import WorkCards from "./MyWorkCards/MyWorkCards";
import People0 from "./WorkImages/01.jpg";
import People1 from "./WorkImages/02.jpg";
import People2 from "./WorkImages/03.jpg";
import Animal0 from "./WorkImages/Koala.jpg";
import Animal1 from "./WorkImages/Penguins.jpg";
import Animal2 from "./WorkImages/Jellyfish.jpg";
import Nature0 from "./WorkImages/Desert.jpg";
import Nature1 from "./WorkImages/Hydrangeas.jpg";
export default class MyWork extends Component {
  state = {
    data: [
      {
        Name: "Animals",
        ImageLink: Animal0,
        Heading: "Koala",
        paragraph: "free to use our template"
      },
      {
        Name: "Nature",
        ImageLink: Nature0,
        Heading: "Desert",
        paragraph: "free to use our template"
      },
      {
        Name: "Animals",
        ImageLink: Animal1,
        Heading: "Penguins",
        paragraph: "free to use our template"
      },
      {
        Name: "Nature",
        ImageLink: Nature1,
        Heading: "Hydrangeas",
        paragraph: "free to use our template"
      },
      {
        Name: "Animals",
        ImageLink: Animal2,
        Heading: "Jellyfish",
        paragraph: "free to use our template"        
      },
      {
        Name: "People",
        ImageLink: People0,
        Heading: "Programmers",
        paragraph: "free to use our template"
      },
      {
        Name: "People",
        ImageLink: People2,
        Heading: "Shane",
        paragraph: "free to use our template"
      },
      {
        Name: "People",
        ImageLink: People1,
        Heading: "Marcus",
        paragraph: "free to use our template"
      },
    ],
  };
  render() {
    return (
      <div className={classes.Work} id="MyWork">
        <h1 className={classes.WorkHeading}>My Work</h1>
        <p>
          I'm Muhammad Bilal Chughtai and I'm Front End Developer with Html ,
          CSS , JavaScript and React.js
        </p>
        <WorkCards data={this.state.data} />
        <hr />
      </div>
    );
  }
}
