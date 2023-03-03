import React from 'react';
import Nav from '../Nav/Nav';
import HeroSection from '../HeroSection/HeroSection';
import About from '../About/About.js';
import Skills from '../Skills/Skills';
import Proyects from '../Proyects/Proyects';
import Contact from '../Contact/Contact';

function Home() {
  return (
    <div className='container max-w-full mx-auto' id='home'>
          <Nav/>
      <div className='bg-[#252734] h-[800px] sm:h-[1000px] lg:h-[700px] xl:min-h-screen overflow-hidden'>
        <header className='relative mx-auto xl:min-h-screen max-w-7xl'>
          <HeroSection />
        </header>
      </div>
      <div className='bg-[#2a2c39]' id='about'>
        <section className='max-w-6xl py-24 mx-auto '>
          <About />
        </section>
      </div>

      <div className='bg-[#252734]' id='skills'>
        <section className='max-w-6xl py-24 mx-auto'>
          <Skills />
        </section>
      </div>

      <div className='bg-[#2a2c39]' id='proyects'>
        <section className='max-w-6xl py-24 mx-auto '>
          <Proyects />
        </section>
      </div>

      <div className='bg-[#252734]' id='contact'>
        <section className='max-w-6xl py-24 mx-auto'>
          <Contact />
        </section>
      </div>
    </div>
  )
}

export default Home