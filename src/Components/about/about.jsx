import './about.css'
import { Link } from 'react-router-dom'
import { GiReturnArrow } from 'react-icons/gi'
import Header from '../header/header'

function About(){
    return(
        <div id='about-ext' className='container-about'>
            <Header/>
        <div id='about1' className='return'>
        <Link to='/'><GiReturnArrow  /></Link>
        </div>

        <div className="about-container">
                <h1 className='Title'> Titulo de informacion sobre mi </h1>
                
                <p>aqui va una breve descripcion sobre mis intereses</p>

                <div className='school'>
                </div>
                

        </div>
        
        </div>
    )
}

export default About