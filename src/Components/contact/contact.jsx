import "./contact.css"
import { Link } from "react-router-dom";
import { GiReturnArrow } from "react-icons/gi";

function Contact(){
    return(
        <>
        <div id='contact1' className='container return'>
        <Link to='/'><GiReturnArrow  /></Link>
        </div>

        <div id='about-ext' className="container about-container">
                <h1>My </h1>
        </div>
        </>
    );
}
export default Contact;