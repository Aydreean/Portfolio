import React from 'react'
import SidebarReduced from "../SidebarReduced";
import Navbar from "../Navbar";

const Carrot = () => {
    return (
        <div class="wrapper">
            <SidebarReduced></SidebarReduced>
                <div id="carrot">
                    <Navbar></Navbar>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Carrot</h1>
                                <img src="https://www.imore.com/sites/imore.com/files/topic_images/2014/topic_imac_0.png"></img>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Carrot
