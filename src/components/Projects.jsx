import React from 'react'
import '../styles/stylesheets/projects.css'
import Flippy, { FrontSide, BackSide } from 'react-flippy'

const Projects = () => {

    let allProjects = [
        {
            title: 'Fetch - GAxDatadog Hackathon Winning App',
            url: 'https://fetch-hs.netlify.app/',
            github: 'https://github.com/ehighberg/fetch',
            screenshot: 'https://imgur.com/fVmEJyy.jpg',
            languages: [
                'React', 'Ruby on Rails', 'Tailwind CSS'
            ],
            APIs: '',
            description: 'Fetch is an employee directory and social media tool created in a week-long hackathon setting. It utilizes a Ruby on Rails server in order to organize employees by team, expertise, etc. and includes real-time chat with ActionCable. The front end is built with ReactJS and Tailwind CSS where users can navigate different teams, and employees are displayed with several pages of information listed, transitioning from professional to personal.'
        },        {
            title: 'Bspoke',
            url: 'https://bspoke-app.herokuapp.com/',
            github: 'https://github.com/Khimarra/Bspoke',
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
            github: 'https://github.com/Khimarra/NJTransit-Redesign',
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
            github: 'https://github.com/Khimarra/the-intermet',
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
            github: 'https://github.com/Khimarra/Techwitch-Tarot',
            screenshot: 'https://i.imgur.com/BSt1vYN.jpg',
            languages: [
                'JavaScript', 'HTML', 'CSS'
            ],
            APIs: 'https://rws-cards-api.herokuapp.com/',
            description: 'Techwitch Tarot is an online Tarot reader that accesses the Rider-Waite Tarot API to fetch card information. DOM manipulation through JavaScript, structured in HTML, and styled in CSS.'
        },
        {
            title: 'Portfolio',
            url: 'https://tarasolbrig.com',
            github: 'https://github.com/Khimarra/My-Portfolio',
            screenshot: 'https://i.imgur.com/afCNPvs.jpg',
            languages: [
                'React', 'SASS'
            ],
            APIs: '',
            description: "This is my portfolio, aka the page you're currently looking at! It is a frontend-only site built to showcase my work. New projects will be posted here. Built in React, styled in SASS."
        }
    ]

    return (
        <div className='projects'>
            <div id='projects'>
                <h1 className='section-title'>Projects</h1>
            </div>
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
                                            <img src={project.screenshot} alt={project.title}></img>
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
