import React from 'react'
import SidebarReduced from "../SidebarReduced";
import Navbar from "../Navbar";

import patriciagaddy from "../images/pgaddymac.png";

const PatriciaGaddy = () => {
    return (
        <div class="wrapper">
            <SidebarReduced></SidebarReduced>
                <div id="patriciagaddy">
                    <Navbar></Navbar>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Patricia L. Gaddy</h1>
                                <img src={patriciagaddy}></img>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default PatriciaGaddy
