import React from 'react';
import Nav from '../Nav/Nav';
import HeroSection from '../HeroSection/HeroSection';
import About from '../About/About.js';
import Skills from '../Skills/Skills';
import Proyects from '../Proyects/Proyects';
import Contact from '../Contact/Contact';

function Home() {
  return (
    <div className='container max-w-full min-h-screen mx-auto'>
      <div className='bg-[#252734]'>
        <header className='bg-[#262626]  max-w-7xl mx-auto'>
          <Nav />
          <HeroSection />
        </header>
      </div>
      <div className='bg-[#2a2c39] z-10 relative'>
        <section className='max-w-6xl py-24 mx-auto '>
          <About />
        </section>
      </div>

      <div className='bg-[#252734]'>
        <section className='max-w-6xl py-24 mx-auto'>
          <Skills />
        </section>
      </div>

      <div className='bg-[#2a2c39]'>
        <section className='max-w-6xl py-24 mx-auto '>
          <Proyects />
        </section>
      </div>

      <div className='bg-[#252734]'>
        <section className='max-w-6xl py-24 mx-auto'>
          <Contact />
        </section>
      </div>
    </div>
  )
}

export default Home