import React from 'react'
import SidebarReduced from "../SidebarReduced";
import Navbar from "../Navbar";

import clarkcenter from "../images/clarkcentermac.png";

const ClarkCenter = () => {
    return (
        <div class="wrapper">
            <SidebarReduced></SidebarReduced>
                <div id="clarkcenter">
                    <Navbar></Navbar>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Clark Center</h1>
                                <p>A website for a local medical practice</p>
                                <img src={clarkcenter}></img>
                                <a href="#">Visit Site</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ClarkCenter
