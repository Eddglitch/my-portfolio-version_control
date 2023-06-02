import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";
import { GiGearHammer } from "react-icons/gi";

import { useState, useEffect } from "react";

function Navbar() {

  const [sele, setSele] = useState();

  useEffect(() => {
  },[sele]);

  return (

    <div className="container-aux">

      <div className="selected-nav">
      <h1> {sele} </h1>
      </div>

    <div className="navigation">

      <a href="#home" >
        <AiOutlineHome className="icon active-nav" onClick ={() => setSele((state) => "Home")} />
      </a>
      

      <a href="#about">
        <AiOutlineUser className="icon one" onClick ={() => setSele((state) => "About Me")}/>
      </a>
      <a href="#member">
        <GiGearHammer className="icon two" onClick ={() => setSele((state) => "Proyects")}/>
      </a>
      <a href="#Contact">
        <BiMessageRoundedDots className="icon thre" onClick ={() => setSele((state) => "Contact")}/>
      </a>
      <a href="#footer">
        <BsArrowDownCircle className="icon four" onClick ={() => setSele((state) => "Footer")}/>
      </a>
    </div>
    </div>
  );
}
export default Navbar;
