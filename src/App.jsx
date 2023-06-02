import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/home/home";
import About from "./Components/about/about";
import Contact from "./Components/contact/contact";

import Navbar from "./Components/nav/nav";
import Header from "./Components/header/header";

function WebContent() {
  return (
    <>
      <div className="bg-circle1"> </div>
      <div className="bg-circle2"> </div>

      <Header/>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-ext" element={<About />} />
        <Route path="/contact-ext" element={<Contact/>}> </Route>
      </Routes>

    </>
  );
}

export default WebContent;
