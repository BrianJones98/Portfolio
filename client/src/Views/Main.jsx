//Dependency Imports
import React from "react";

//Component Imports
import Home from "../Components/Home.jsx";
import Projects from "../Components/Projects.jsx";
import About from "../Components/About.jsx";

//Style Imports
import style from './style.module.css';

const Main = _props =>{
    return (
        <div className={style.viewWrapper}>
            <Home />
            <h1>Projects</h1>
            <Projects />
            <h1>About</h1>
            <About />
        </div>
    );
}

export default Main;