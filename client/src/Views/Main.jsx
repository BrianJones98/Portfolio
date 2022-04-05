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
            <header>
                <div id="img-placeholder"/>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Projects</li>
                        <li>About</li>
                    </ul>
                </nav>
            </header>
            <Home />
            <h1>Projects</h1>
            <Projects />
            <h1>About</h1>
            <About />
            <footer>
                <a href="mailto:BrianJones.JST@gmail.com">BrianJones.JST@gmail.com</a>
                <div>
                    <div id="sm-icon-placeholder" />
                    <div id="sm-icon-placeholder" />
                </div>
                <p>&copy; 2022 Brian Jones</p>
            </footer>
        </div>
    );
}

export default Main;