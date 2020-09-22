import React, { Component } from "react";
import classes from "./Contact.module.css";

export default class Contact extends Component {
  render() {
    return (
      <div className={classes.ContactPage}>
        <h1 className={classes.ContactHeading}>Contact Me</h1>
        <p className={classes.ContactParagraph}>
          Fusce eget nibh nec justo interdum condimentum. Morbi justo ex,
          efficitur at ante ac, tincidunt maximus ligula. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
        <form>
            <div className={classes.ContactFormDiv1}>
                <input type="text" placeholder='Your name...'/>
                <input type="email" placeholder='Your email...'/>
            </div >
            <div className={classes.ContactFormDiv2}>
                <input type="text" placeholder='Subject...'/></div>
            <textarea rows="10" placeholder='Your message...'></textarea>
            <button>SEND MESSAGE</button>
        </form>
      </div>
    );
  }
}
