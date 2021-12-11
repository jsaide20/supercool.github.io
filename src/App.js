import React, {useState} from "react";
import {Routes, HashRouter, Route} from 'react-router-dom';
import Disassembler from './components/disassembler';
import AboutPage from "./pages/About";
import HelpPage from "./pages/Help";
import InstructionPage from "./pages/Instructions";
import ReportError from "./pages/ReportError";
import Navbar from "./components/navbar";
import HamburgerMenu from "./components/hambar";


//App() returns components used to build the website and the
//relative paths to each static web page. The Hamburger Menu
//and Navigation Bar will show up across all pages within
//the website.

function App() {
    //useState helps toggle certain components on or off
    const [isOn, setIsOn] = useState(false);
    const toggle = () => {
        setIsOn(!isOn)
    }

  return (
      <HashRouter>
          <div>
              <HamburgerMenu isOn={isOn} toggle={toggle}/>
              <Navbar toggle={toggle}/>
              <Routes>
                <Route path="/" element={<Disassembler/>}/>
                <Route path="/About" element={<AboutPage/>} />
                <Route path="/Help" element={<HelpPage/>} />
                <Route path="/Instructions" element={<InstructionPage/>} />
                <Route path="/Report" element={<ReportError/>} />
                </Routes>
          </div>
      </HashRouter>
  );
}

export default App;
