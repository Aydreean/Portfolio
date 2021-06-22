import Aos from 'aos';
import React, {useEffect} from 'react'

import BT from "./images/BT_Billboard.png";
import Carrot from "./images/carrot_billboard.png";
import Divdat from "./images/divdat_billboard.png";

const AppUI = () => {

    useEffect(() => {
        Aos.init({duration: 1000, once: true});
    }, [])

    return (
        <div id="appui" className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <h2>App UI</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    {/* <a href="#"><img data-aos="fade-up" src={BT}></img></a>
                    <a href="#"><img data-aos="fade-up" src={Carrot}></img></a>
                    <a href="#"><img data-aos="fade-up" src={Divdat}></img></a> */}
                    <a href="/Brightlytwisted">
                    <div className="image" data-aos="fade-up">
                        <img className="image__img" src={BT}/>
                        <div className="image__overlay">
                            <div className="image__title">
                                <h3>BrightlyTwisted</h3>
                            </div>
                            <div className="image__description">
                                <p>Mockup for an E-Commerce clothing app</p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="Carrot">
                    <div className="image" data-aos="fade-up">
                        <img className="image__img" src={Carrot}/>
                        <div className="image__overlay">
                            <div className="image__title">
                                <h3>Carrot Wellness</h3>
                            </div>
                            <div className="image__description">
                                <p>Mockup for an app that rewards you financially for walking</p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="Divdat">
                    <div className="image" data-aos="fade-up">
                        <img className="image__img" src={Divdat}/>
                        <div className="image__overlay">
                            <div className="image__title">
                                <h3>Divdat</h3>
                            </div>
                            <div className="image__description">
                                <p>Mockup for the app version of the Divdat Mobile Kiosks</p>
                            </div>
                        </div>
                    </div>
                </a>
                </div>
            </div>
        </div>
    )
}

export default AppUI
