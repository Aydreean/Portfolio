import React from 'react';
import SidebarReduced from "./SidebarReduced";
import Navbar from "./Navbar";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import dri from "./images/dri.jpg";

const About_Page = () => {
    return (
        <div class="wrapper">
            <SidebarReduced></SidebarReduced>
                <div id="content2" className="about">
                    <Navbar></Navbar>
                    <img src={dri}/>
                    <h2>Thanks for stopping by! I'm Adrian, a web designer out of Metro Detroit, USA. </h2>
                    <p>I find that I am happiest when I spend time each day creating something, forming something into a shape it wasn't the previous day. Whether it be coding, playing in a band, or learning, I'm nurtured by the satisfaction of iteration and improvement. The thrill I get learning something new is fantastic. </p>
                    <p>What I have always loved about web design is how innately curious I am about it. I can no longer count how many times I've stayed up late, both frustrated and fascinated at learning a new idea, not content until I feel like I can fully understand the concept. I apply this same curiosity and fascination to every new page that I create, and I will to your website as well.</p>
                    <p>When I'm not working I love walking in the woods, playing hockey, and listening to music. </p>
                    <h3>What I Know</h3>
                    <p>I started learning web design in 2013 during my final year of college as a way to supplement my degree with a skill. Since that time, web design has been a staple in my mind and what I choose to learn.</p>
                    <p>I graduated in 2019 from <a href="https://sis.wayne.edu/">Wayne State University</a> in Detroit, Michigan with a Master's in Information Science, also possessing a graduate certificate in Information Management where I focused on User Experience Design. </p> 
                    <p>As a web designer with three years of professional work behind me, I have skills and experience in the following areas and proficiencies: </p>
                    <ul>
                        <li>Web Design</li>
                        <li>UI/UX Design</li>
                        <li>Database Management</li>
                        <li>Back-End Development</li>
                        <li>Javascript</li>
                        <li>C#</li>
                        <li>SQL</li>
                        <li>React</li>
                        <li>JQuery</li>
                        <li>Adobe Creative Suite</li>
                        <li>Affinity Photo & Designer</li>
                        <li>Sketch 3</li>
                    </ul>
                    <h3>What I Offer </h3>
                    <p>As an ever-curious liberal arts major who has worked in various fields throughout the last decade, I believe that I offer a unique, outsider's perspective on the industry and the creation process. I have the mind of an artist, and treat every website or design that I do as an actual piece of art.</p>
                    <p>With me on your team you get someone who is always willing to try new things, who is willing to put the time in to fulfill a dream, and someone who can take your website idea into the real world. </p>
                </div>
        </div>
    )
}

export default About_Page
