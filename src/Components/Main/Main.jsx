import React, { Component } from 'react'
import classes from './Main.module.css'
import About from './About/About'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'
export default class Main extends Component {
    render() {
        return (
            <div className={classes.Main}> 
            <About/>            
            <Skills/>   
            <Contact/>
            </div>
        )
    }
}
