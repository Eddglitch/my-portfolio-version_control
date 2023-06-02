import "./home.css";
import img from "../props/img2.jpg";
import { BsMouse } from "react-icons/bs";
import Buttons from "../button/button";
import { useState, useEffect } from "react";


function Home() {
    
    const [clicked, setClicked] = useState();

    useEffect(() => {
      const toggle = document.querySelector(".main-img");
        toggle.classList.toggle("active");
    }, [clicked]);

  return (
    
    <div id="home" className="container home-container">
        
        
        
      <div className="logo" onClick={() => setClicked((state) => !state)}>
        
        <div className="main-img" >
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>

        <img src={img} alt="" />
        
      </div>

      <a href="#footer" className="scroll-down">
        <hr />
        <h5>scroll down</h5>
        <BsMouse className="scroll" />
        <hr />
      </a>
      <h2>
        <span id="about">About Me</span>
        <br />

        <p>
          I am currently dedicated to studying a professional career in computer
          engineering at the National Polytechnic Institute (UPIICSA), dabbling
          in various topics related to programming, networks, Tic's, hardware,
          software, etc. Likewise, the institution where I study allows and
          encourages me to understand administrative and optimization issues
          through linear programming. 
          <br />
          At the same time I study and create
          front-end web applications, constantly adding new techniques,
          frameworks and libraries. 
          <br />
          Independently I belong to two musical groups
          with their own creations, I love being the bassist of the band.
        </p>
      </h2>

      <Buttons />
    </div>

  ); 
}

export default Home;
