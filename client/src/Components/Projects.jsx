//Dependency Imports
import React from "react";
import { Link } from '@reach/router';

//Style Imports
import style from './style.module.css';

const Projects = _props => {
    return (
        <div className={style.componentWrapper}>
            <Link className={style.projWrapper} to="/project/speedy-square">
                <div className={style.projImgPlaceholder} />
                <p>Speedy Square</p>
                <p>2020</p>
            </Link>
            <Link className={style.projWrapper} to="/project/schedualize">
                <div className={style.projImgPlaceholder} />
                <p>Schedualize</p>
                <p>2021</p>
            </Link>
            <Link className={style.projWrapper} to="/project/request-parser">
                <div className={style.projImgPlaceholder} />
                <p>Request Parser</p>
                <p>2022</p>
            </Link>
        </div>
    );
}

export default Projects;