import React from 'react'
import '../styles/stylesheets/projects.css'

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
            description: 'A full-stack app with user authentication and full CRUD capabilities. Users can create an account and display their own art.'
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
            description: 'Group project, full-stack mobile site, based on wireframes provided by UX designers tasked with re-designing the existing NJTransit mobile site.'
        },
        {
            title: 'The Intermet',
            url: 'http://the-intermet.surge.sh/',
            github: 'https://git.generalassemb.ly/Khimarra/The-InterMet',
            screenshot: 'https://i.imgur.com/UqOSWyr.jpg',
            languages: [
                'React', 'CSS'
            ],
            APIs: 'https://www.metmuseum.org/blogs/now-at-the-met/2018/met-collection-api',
            description: 'React app built using a RESTful API to retreive and render info from the Met Collection.'
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
            description: 'this is a description of my tarot app'
        }
    ]

    return (
        <div className='projects'>
            <a id='projects'><h1 className='section-title'>Projects</h1></a>
            <div>
                <div className='all-projects'>

                    {allProjects.map((project, index) => {
                        return (
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
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects
