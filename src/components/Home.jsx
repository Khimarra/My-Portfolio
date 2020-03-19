import React from 'react'
import skyline from '../images/skyline.jpg'

const Home = () => {
    return (
        <div>
            <img src={skyline} alt='NYC from Queens'></img>
            <h1 className='hello'>Hello, I'm Tara Solbrig</h1>
            <h1 className='mini-bio'>I'm a full-stack web developer and software engineer</h1>
        </div>
    )
}

export default Home
