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
            <h1 className='section-title'>About</h1>
            <div className='headshot-container'>
                <img src={headshot} alt='headshot'></img>
            </div>
            <div className='languages about-languages'>
                {allLanguages.map((project, index) => {
                    return(
                        <div>
                            <h4>#{project}</h4>
                        </div>
                    )
                })}
            </div> 
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
