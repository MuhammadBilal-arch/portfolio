import React, { Component } from 'react'
import classes from './Main.module.css'
import About from './About/About'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'
import MyWork from './MyWork/MyWork'
export default class Main extends Component {
    render() {
        return (
            <div className={classes.Main}> 
            <About/>            
            <Skills/>   
            <MyWork/>
            <Contact/>
            </div>
        )
    }
}
