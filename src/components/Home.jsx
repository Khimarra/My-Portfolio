import React from 'react'
import '../styles/stylesheets/home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='bg-image'></div>
            <a id='home'></a>
            <h1 className='hello'>Hi, I'm <span>Tara Solbrig</span></h1>
            <h1 className='mini-bio'>I'm a full-stack web developer and software engineer</h1>
        </div>
    )
}

export default Home
