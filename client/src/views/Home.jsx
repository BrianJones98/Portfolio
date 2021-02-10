//Dependency imports
import React from 'react';
import styles from './views.module.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = props => {
    
    return (
        <div>
            <div className={styles.grid}>
                <div>
                    <h2>Hello!</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquam perspiciatis consectetur quis! Nihil veniam praesentium repellendus labore modi saepe unde itaque? Laborum corrupti dicta id illo corporis asperiores tempore.
                    </p>
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi culpa quis totam aut libero delectus maxime, repellat placeat! Quis reprehenderit perspiciatis repellat obcaecati et adipisci impedit magni ipsum animi earum?
                    </p>
                </div>
            </div>

            <div className={styles.projects}>
                <h1>Projects</h1>
                {/* https://www.npmjs.com/package/react-responsive-carousel */}
                <Carousel
                    showThumbs={false}
                >
                    <div>
                        <h2>Schedulize</h2>
                        <p>A dynamic schedule creation app</p>
                    </div>
                    <div>
                        <h2>Speedy Square</h2>
                        <p>A fast-paced action game with randomly generated shapes that the player must dodge</p>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default Home;