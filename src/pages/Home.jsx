import React from 'react'
import Nav from '../componenets/Nav'
import Hero from '../componenets/Hero'
import About from '../componenets/About'
import Skills from '../componenets/Skills'
import Projects from '../componenets/Projects'
const Home = () => {
  return (
    <div className='scroll-smooth'>
    <Nav></Nav>
    <Hero></Hero>
    <About></About>
    <Skills></Skills>
    <Projects></Projects>
    </div>
  )
}

export default Home