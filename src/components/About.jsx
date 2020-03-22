import React from 'react'
import headshot from '../images/headshot.jpg'

const About = () => {
    return (
        <div>
            <h1 className='section-title'>About</h1>
            <img src={headshot} alt='headshot'></img>
            <p>I am a highly creative, pragmatic, and passionate engineer with 4 years’ experience working in management of a craft retail company, and almost 10 years’ experience as a professional artist. I believe I have found the artistry in coding, and seek to apply my imaginative, out-of-the-box thinking to new programming challenges. I strive to work in a collaborative environment that embraces innovative design, and encourages constant learning.</p>
            <div className='fa-links'>
                <a className="icons" href="https://www.linkedin.com/in/tarasolbrig/">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a  className="icons" href="https://github.com/Khimarra">
                    <i className="fab fa-github-square"></i>
                </a>
            </div>
        </div>
    )
}

export default About
