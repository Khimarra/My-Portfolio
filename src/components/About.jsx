import React from 'react'
import headshot from '../images/headshot.jpg'
import '../styles/stylesheets/about.css'

const allLanguages = [
    'JavaScript',
    'HTML',
    'CSS',
    'SASS',
    'Node.js',
    'React',
    'npm',
    'Git',
    'PostgreSQL',
    'Slack',
    'Express',
    'AWS',
    'Ruby',
    'Jira',
    'Rails',
    'Asana'
]

const About = () => {
    return (
        <div className='about'>
            <div id='about'><h1 className='section-title'>About</h1></div>
            <div className='headshot-container'>
                <img src={headshot} alt='headshot'></img>
            </div>
            <a href='https://docdro.id/7fybv6B' target='_blank' rel="noopener noreferrer" className='resume-link'><h3>View my resume</h3></a>
            <div className='languages about-languages'>
                {allLanguages.map((language, index) => {
                    return(
                        <div>
                            <h4>#{language}</h4>
                        </div>
                    )
                })}
            </div> 
            <p>I am a highly creative, pragmatic, and passionate engineer with 4 years’ experience working in management of a craft retail company, and almost 10 years’ experience as a professional artist. I believe I have found the artistry in coding, and seek to apply my imaginative, out-of-the-box thinking to new programming challenges. I strive to work in a collaborative environment that embraces innovative design, and encourages constant learning.</p>
            <div className='fa-links'>
                <a className="icons" href="https://www.linkedin.com/in/tarasolbrig/" target='_blank' rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a  className="icons" href="https://github.com/Khimarra" target='_blank' rel="noopener noreferrer">
                    <i className="fab fa-github-square"></i>
                </a>
            </div>
        </div>
    )
}

export default About
