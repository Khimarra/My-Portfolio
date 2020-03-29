import React from 'react'
import '../styles/stylesheets/projects.css'
import Flippy, { FrontSide, BackSide } from 'react-flippy'

const Projects = () => {

    let allProjects = [
        {
            title: 'Bspoke',
            url: 'http://bspoke-app.herokuapp.com/',
            github: 'https://git.generalassemb.ly/Khimarra/Bspoke',
            screenshot: 'https://i.imgur.com/F1mNU6x.jpg',
            languages: [
                'React', 'Ruby on Rails', 'SASS'
            ],
            APIs: '',
            description: 'Bspoke is a full-stack app with user authentication where users can create listings showcasing their own art. Backend database created with Ruby on Rails, user auth implemented with Bcrypt and JWT, frontend built in React, and styled with SASS.'
        },
        {
            title: 'NJTransit Re-design',
            url: 'https://nj-transit-mobile.herokuapp.com/',
            github: '',
            screenshot: 'https://i.imgur.com/7yWWpki.jpg',
            languages: [
                'React', 'Express', 'Sequelize', 'CSS'
            ],
            APIs: '',
            description: 'The NJTransit Re-design (Group Project) is a full-stack mobile site based on wireframes provided by UX designers. Backend built in Express and Sequelize, frontend built in React, styled with CSS. Kept team organized and Agile via Jira, Git for version control, and Slack for communication.'
        },
        {
            title: 'The InterMet',
            url: 'http://the-intermet.surge.sh/',
            github: 'https://git.generalassemb.ly/Khimarra/The-InterMet',
            screenshot: 'https://i.imgur.com/UqOSWyr.jpg',
            languages: [
                'React', 'CSS'
            ],
            APIs: 'https://www.metmuseum.org/blogs/now-at-the-met/2018/met-collection-api',
            description: 'The InterMet is a React app that accesses the Metropolitan Museum of Art Collection API in order to display several random art pieces by department. Virtual DOM manipulation and front-end built with React, styled in CSS.'
        },
        {
            title: 'Techwitch Tarot',
            url: 'https://pages.git.generalassemb.ly/Khimarra/Techwitch-Tarot/',
            github: 'https://git.generalassemb.ly/Khimarra/Techwitch-Tarot',
            screenshot: 'https://i.imgur.com/BSt1vYN.jpg',
            languages: [
                'JavaScript', 'HTML', 'CSS'
            ],
            APIs: 'https://rws-cards-api.herokuapp.com/',
            description: 'Techwitch Tarot is an online Tarot reader that accesses the Rider-Waite Tarot API to fetch card information. DOM manipulation through JavaScript, structured in HTML, and styled in CSS.'
        }
    ]

    return (
        <div className='projects'>
            <a id='projects'>
                <h1 className='section-title'>Projects</h1>
            </a>
            <div>
                <div className='all-projects'>

                    {allProjects.map((project, index) => {
                        return (
                            <Flippy
                                flipOnClick={true}
                                flipDirection="horizontal"
                            >
                                <FrontSide>
                                    <div className='project-card'>
                                        <h2>{project.title}</h2>
                                        <div className='image-container'>
                                            <img src={project.screenshot}></img>
                                        </div>
                                        <div className='languages'>
                                            {project.languages.map((language, index) => {
                                                return (
                                                    <h4>#{language}</h4>
                                                )
                                            })}

                                        </div>

                                        <div className='fa-links project-links'>
                                            <a className='icons' href={`${project.url}`} target='_blank'>
                                                <i class="fas fa-link"></i>
                                            </a>
                                            <a className='icons' href={`${project.github}`} target='_blank'>
                                                <i className="fab fa-github-square"></i>
                                            </a>
                                        </div>
                                    </div>
                                </FrontSide>

                                <BackSide>
                                    <div className='project-card back'>
                                        <p>
                                            {project.description}
                                        </p>

                                        <div className='fa-links project-links'>
                                            <a className='icons' href={`${project.url}`} target='_blank'>
                                                <i class="fas fa-link"></i>
                                            </a>
                                            <a className='icons' href={`${project.github}`} target='_blank'>
                                                <i className="fab fa-github-square"></i>
                                            </a>
                                        </div>
                                    </div>
                                </BackSide>
                            </Flippy>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects
