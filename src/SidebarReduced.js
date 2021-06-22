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
                    <li><a href="/#webdesign">Web Design</a></li>
                    <li><a href="/#appui">App UI</a></li>
                    <li><a href="/#graphics">Graphics</a></li>
                </ul>
            </li>
            <li>
            <a href="/About">About</a>
            </li>
            <li>
                <a href="/Contact">Contact</a>
            </li>
            {/* <p>I'm a web designer looking to help you build your next website :) I believe in great user experiences and intuitive designs.</p> */}
        </ul>
    </nav>
    )
}

export default Sidebar
