import React from 'react'
import '../styles/stylesheets/navbar.css'

const Navbar = () => {

    return (
        <nav> 
            <a href='#home'><h3 className='navlink'>Home</h3></a>
            <a href='#projects'><h3 className='navlink'>Projects</h3></a>
            <a href='#about'><h3 className='navlink'>About</h3></a>
            <a href='#resume'><h3 className='navlink'>Resume</h3></a>
            <a href='#contact'><h3 className='navlink'>Contact</h3></a>
        </nav>
    )
}

export default Navbar
