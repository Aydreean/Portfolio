import React, {useEffect} from 'react'
import cc_cover from "./images/cc_screen.png";
import pg_cover from "./images/pg_screen.png";
import Aos from "aos";

const WebDesign = () => {

    useEffect(() => {
        Aos.init({once: true});
    }, [])

    return (
        <div id="webdesign">
            <h2>Web Design</h2>
                <p>My first love, my muse. </p>

                <a href="/Clark-Center">
                    <div className="image" data-aos="fade-up">
                        <img className="image__img" src={cc_cover}/>
                        <div className="image__overlay">
                            <div className="image__title">
                                <h3>Clark Center for Comprehensive Medicine</h3>
                            </div>
                            <div className="image__description">
                            <p>A website for a small medical practice in Garden City, Michigan</p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="/Patricia-Gaddy">
                    <div className="image" data-aos="fade-up">
                        <img className="image__img" src={pg_cover}/>
                        <div className="image__overlay">
                            <div className="image__title">
                                <h3>Patricia L. Gaddy Family Law Services</h3>
                            </div>
                            <div className="image__description">
                                <p>A website for a family lawyer in Toledo, Ohio</p>
                            </div>
                        </div>
                    </div>
                </a>
        </div>
    )
}

export default WebDesign
