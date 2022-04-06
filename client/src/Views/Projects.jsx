//Dependency Imports
import React from "react";
import { Link } from '@reach/router';

//Style Imports
import style from './style.module.css';

const Projects = _props => {
    return (
        <div className={style.viewWrapper}>
            <Link className={style.projWrapper} to="/project/speedy-square">
                <div id="proj-img-placeholder" />
                <p>Speedy Square</p>
                <p>2020</p>
            </Link>
            <Link className={style.projWrapper} to="/project/schedualize">
                <div id="proj-img-placeholder" />
                <p>Schedulize</p>
                <p>2021</p>
            </Link>
            <Link className={style.projWrapper} to="/project/request-parser">
                <div id="proj-img-placeholder" />
                <p>Request Parser</p>
                <p>2022</p>
            </Link>
        </div>
    );
}

export default Projects;