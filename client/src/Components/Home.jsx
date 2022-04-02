//Dependency Imports
import React from "react";

//Style Imports
import style from "./style.module.css";

const Home = _props => {
    return (
        <div className={style.componentWrapper}>
            <h1>Brian Jones</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ipsum reprehenderit vitae tempore beatae illo officiis rerum. Dolor ipsum alias molestias. Magnam laudantium odio molestiae molestias ipsa, omnis vitae non.</p>
            <div className={style.imgPlaceholder} />
        </div>
    );
}

export default Home;