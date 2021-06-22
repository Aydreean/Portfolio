import React, { useEffect } from 'react'
import ModalImage from "react-modal-image";
import jQuery from "jquery";
import Aos from "aos";

import iceland from "./images/iceland.png";
import north from "./images/north.png";
import america from "./images/America.png";
import north_full from "./images/north_full.png";
import america_full from "./images/America_full.png";
import cor4 from "./images/cor4.png";

const Graphics = () => {

    useEffect(() => {
        Aos.init();
     }, [])

    return (
        <div id="graphics">
            <h2>Graphics</h2>
            <p>I love vector art. When I'm not making your website look and perform incredibly, I sometimes like to open up Sketch and let my imagination run wild. I would love to visit the mountains some day. </p>
            <a href={iceland}><img data-aos="fade-up" id="img" src={iceland}></img></a>
            <a href={north_full}><img data-aos="fade-up" id="img" src={north}></img></a>
            <a href={america_full}><img data-aos="fade-up" id="img" src={america}></img></a>
            <a href={cor4}><img data-aos="fade-up" id="img" src={cor4}></img></a>
        </div>
    )
}

export default Graphics
