import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';

import adrian from "./images/fd.JPG";
import dri from "./images/dri.jpg";

const Sidebar = () => {
    return (
        <nav id="sidebar">
        <div class="sidebar-header">
            <a href="/"><h3>ADRIANDC</h3></a>
            <p>Web Designer</p>
            <img src={adrian}></img>
        </div>

        <ul class="list-unstyled components">
            <li class="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Home</a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
                    <li><AnchorLink href="#webdesign">Web Design</AnchorLink></li>
                    <li><AnchorLink href="#appui">App UI</AnchorLink></li>
                    <li><AnchorLink href="#graphics">Graphics</AnchorLink></li>
                </ul>
            </li>
            <li>
            <a href="/About">About</a>
            </li>
            <li>
                <a href="/Contact">Contact</a>
            </li>
            <p></p>
        </ul>
    </nav>
    )
}

export default Sidebar
