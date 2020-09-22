import React, { Component } from "react";
import classes from "./Skills.module.css";
import SkillsCard from "./SkillsCard/SkillsCard";

export default class Skills extends Component {
  state = {
    data: [
      {
        logo: "fa fa-code fa-4x",
        heading: "HTML5 & CSS",
        paragraph:
          "Phasellus non convallis dolor. Integer tempor hendrerit arcu at bibendum. Sed ac ante non metus vehicula congue quis eget eros.",
      },
      {
        logo: "fab fa-js fa-4x",
        heading: "JavaScript",
        paragraph:
          "Phasellus non convallis dolor. Integer tempor hendrerit arcu at bibendum. Sed ac ante non metus vehicula congue quis eget eros.",
      },
      {
        logo: "fab fa-react fa-4x",
        heading: "React.js",
        paragraph:
          "Phasellus non convallis dolor. Integer tempor hendrerit arcu at bibendum. Sed ac ante non metus vehicula congue quis eget eros.",
      },
      {
        logo: "fas fa-cog fa-4x",
        heading: "AntDesign",
        paragraph:
          "Phasellus non convallis dolor. Integer tempor hendrerit arcu at bibendum. Sed ac ante non metus vehicula congue quis eget eros.",
      },
    ],
  };
  render() {
    return (
      <div className={classes.SkillsPage}>
        <h1 className={classes.SkillsHeading}>What I’m good at?</h1>
        <p className={classes.SkillParagraph}>
          Curabitur leo felis, rutrum vitae varius eu, malesuada a tortor.
          Vestibulum congue leo et tellus aliquam, eu viverra nulla semper.
          Nullam eu faucibus diam. Donec eget massa ante.
        </p>

        <SkillsCard data={this.state.data} />
        <hr/>
      </div>
    );
  }
}
