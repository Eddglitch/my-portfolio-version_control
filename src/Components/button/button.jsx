import "./button.css";
import { Link } from "react-router-dom";

function Buttons() {
  return (
    <div className="container button-contain">
      <Link to="/about-ext" className="btn pri">
        Learn more
      </Link>
      
      <Link to="/contact-ext" className="btn sec">
        Contact
      </Link>
    </div>
  );
}

export default Buttons;
