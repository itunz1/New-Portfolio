import React from 'react';
import Nav from '../Nav/Nav';
import HeroSection from '../HeroSection/HeroSection';
import About from '../About/About.js';
import Skills from '../Skills/Skills';
import Proyects from '../Proyects/Proyects';

function Home() {
  return (
    <>
    <div className='bg-[#262626]'>
        <header className='bg-[#262626] min-h-screen max-w-7xl mx-auto'>
            <Nav/>
            <HeroSection/>
        </header>
    </div>
    <div className='bg-[#2a2c39] z-10 relative'>
        <section className=' max-w-6xl mx-auto py-24'>
            <About/>
        </section>
        </div>

        <div className='bg-[#262626]'>
        <section className='max-w-6xl mx-auto py-24'>
            <Skills/>
        </section>
        </div>

        <div className='bg-[#2a2c39]'> 
          <section className=' max-w-6xl mx-auto py-24'>
            <Proyects/>
          </section>
        </div>
    </>
  )
}

export default Home