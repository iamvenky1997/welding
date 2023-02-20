import "./nav.css"
import logo from "./logo.jpg";
import {useRef} from "react"
import {Link} from 'react-router-dom';
const Nav = () => {
    const toggleRef = useRef()
    const hamburger = () =>{
        document.getElementById("small-nav").classList.toggle("small-nav")
        // toggleRef.toggle("small-nav")
    }
    return (
        <nav id = "small-nav" ref={toggleRef}>
            <div className = "hamburger" onClick = {hamburger}>
             <i className="fa-solid fa-bars"></i>
            </div>
            <img src={logo} />
            <h1 className='title' id  ="title">Welding Work Force</h1>
            <i className="fa-solid fa-xmark" onClick = {hamburger} id= "cross-mark"></i>
            <ul className="nav-links">
                <li><Link to ="/">Home </Link></li>
                <li><Link to ="/about">About </Link></li>
                <li><Link to ="/services">Services </Link></li>
                
            </ul>
            
            
        </nav>


    )
}

export default Nav