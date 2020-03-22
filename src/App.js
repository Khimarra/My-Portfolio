import React from 'react';
import './styles/stylesheets/base.css';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
