import React from 'react'
import headshot from '../images/headshot.jpg'

const About = () => {
    return (
        <div>
            <h1 className='section-title'>About</h1>
            <img src={headshot} alt='headshot'></img>
        </div>
    )
}

export default About
