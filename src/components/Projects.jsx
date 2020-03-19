import React from 'react'

const Projects = () => {

    let allProjects = [
        {
            title: 'Techwitch Tarot',
            url: 'https://pages.git.generalassemb.ly/Khimarra/Techwitch-Tarot/',
            screenshot: 'https://i.imgur.com/BSt1vYN.jpg',
            languages: [
                'JavaScript', 'HTML', 'CSS'
            ],
            APIs: 'https://rws-cards-api.herokuapp.com/'
        },
        {
            title: 'The Intermet',
            url: 'http://the-intermet.surge.sh/',
            screenshot: 'https://i.imgur.com/UqOSWyr.jpg',
            languages: [
                'React', 'CSS'
            ],
            APIs: 'https://www.metmuseum.org/blogs/now-at-the-met/2018/met-collection-api'
        },
        {
            title: 'NJTransit Re-design',
            url: 'https://nj-transit-mobile.herokuapp.com/',
            screenshot: 'https://i.imgur.com/7yWWpki.jpg',
            languages: [
                'React', 'Express', 'Sequelize', 'CSS'
            ],
            APIs: ''
        },
        {
            title: 'Bspoke',
            url: 'http://bspoke-app.herokuapp.com/',
            screenshot: 'https://i.imgur.com/F1mNU6x.jpg',
            languages: [
                'React', 'Ruby on Rails', 'SASS'
            ],
            APIs: ''
        }
    ]

    return (
        <div>
            <h1 className='section-title'>Projects</h1>
            <div className='project-card'>
                <h2>{allProjects[0].title}</h2>
            </div>
        </div>
    )
}

export default Projects
