import logo from './logo.svg';
import './App.css';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import About_Page from "./About_Page";
import Contact_Page from "./Contact_Page";
import BrightlyTwisted from "./subpages/Brightlytwisted";
import Carrot from "./subpages/Carrot";
import Divdat from "./subpages/Divdat";
import ClarkCenter from "./subpages/ClarkCenter";
import PatriciaGaddy from "./subpages/PatriciaGaddy";

import WebDesign from "./WebDesign";
import AppUI from "./AppUI";
import Graphics from "./Graphics";

function App() {
  return (
    <Router>
        <div className="App">
          <Route exact path="/" render={(props) => <HomePage></HomePage>}/>
          <Route path="/Home" render={(props) => <HomePage></HomePage>}/>
          <Route path="/About" render={(props) => <About_Page></About_Page>}/>
          <Route path="/Contact" render={(props) => <Contact_Page></Contact_Page>}/>
          <Route path="/Brightlytwisted" render={(props) => <BrightlyTwisted></BrightlyTwisted>}/>
          <Route path="/Carrot" render={(props) => <Carrot></Carrot>}/>
          <Route path="/Divdat" render={(props) => <Divdat></Divdat>}/>
          <Route path="/Clark-Center" render={(props) => <ClarkCenter></ClarkCenter>}/>
          <Route path="/Patricia-Gaddy" render={(props) => <PatriciaGaddy></PatriciaGaddy>}/>
        </div>
    </Router>
  );
}

export default App;
