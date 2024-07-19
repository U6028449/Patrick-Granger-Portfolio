import React from 'react'
//import './header.css';

const header = () => {
  return (
    <header>
    <h1>Patrick Granger</h1>
    <nav>
        <ul>
            <li><a href="#LandingPage" id="nav-LandingPage">About Me</a></li>
            <li><a href="#portfolio" id="nav-portfolio">Portfolio</a></li>
            <li><a href="#contact" id="nav-contact">Contact</a></li>
            <li><a href="#resume" id="nav-resume">Resume</a></li>
        </ul>
    </nav>
</header>  )
}

export default header