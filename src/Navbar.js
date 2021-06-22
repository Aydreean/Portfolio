import React from 'react'

import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
    return (
    <nav class="navbar navbar-default">
        <div class="container-fluid">
        <a href="/"><h3>ADRIANDC</h3></a>
        <p>Web Designer</p>
            <div class="navbar-header">
                <button type="button" id="sidebarCollapse" class="navbar-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li><AnchorLink href="#webdesign">Websites</AnchorLink></li>
                    <li><AnchorLink href="#appui">App UI</AnchorLink></li>
                    <li><AnchorLink href="#graphics">Graphics</AnchorLink></li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar
