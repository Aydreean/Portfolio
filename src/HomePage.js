import React from 'react'

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import WebDesign from "./WebDesign";
import AppUI from "./AppUI";
import Graphics from "./Graphics";

const HomePage = () => {
    return (
        <div className="wrapper">
            <Sidebar></Sidebar>
                <div id="content">
                    <Navbar></Navbar>

                    <WebDesign></WebDesign>

                    <div class="line"></div>

                    <AppUI></AppUI>

                    <div class="line"></div>

                    <Graphics></Graphics>
                </div>
        </div>
    )
}

export default HomePage
