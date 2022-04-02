//Dependency Imports
import React from "react";

//Style Imports
import style from './style.module.css';

const Projects = _props => {
    return (
        <div className={style.componentWrapper}>
            <div className={style.projWrapper}>
                <div className={style.projImgPlaceholder} />
                <p>Speedy Square</p>
                <p>2020</p>
            </div>
            <div className={style.projWrapper}>
                <div className={style.projImgPlaceholder} />
                <p>Schedualize</p>
                <p>2021</p>
            </div>
            <div className={style.projWrapper}>
                <div className={style.projImgPlaceholder} />
                <p>Request Parser</p>
                <p>2022</p>
            </div>
        </div>
    );
}

export default Projects;