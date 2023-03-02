import React from 'react';
import jose from '../../images/jose.png';
import { BiDownload } from 'react-icons/bi';
import { CiFacebook } from 'react-icons/ci';
import { FiGithub } from 'react-icons/fi';
import { BsLinkedin } from 'react-icons/bs';


export default function HeroSection() {
    return (
        <div className='bg-[#252734]'>
            <div className='text-white md:absolute md:bottom-[-900px] md:ml-12 lg:bottom-auto lg:w-[400px] lg:relative xl:w-full xl:ml-32 w-fit xl:mt-0 2xl:ml-14 2xl:mt-20 '>
                <h3 className='font-bold tracking-tight md:text-4xl lg:text-5xl xl:text-7xl xl:mt-0 2xl:mt-16 2xl:text-8xl'>Hello! I’m</h3>
                <h2 className='font-bold tracking-tight md:text-6xl lg:text-[80px] xl:text-[7.5rem] 2xl:text-[9rem] 2xl:mt-[-20px] '>Jose Lezama</h2>
                <p className='mt-10 mb-16 text-2xl text-[#858792] md:text-base xl:text-xl 2xl:text-2xl'>Full Stack Web Developer</p>
                <a className=' border-[1px] border-[#3b3d49] hover:bg-[#85879215] w-fit inline-block px-12 py-7 rounded-full transition duration-500 ease-in-out hover:-translate-y-1 md:text-base md:px-10 md:py-4 xl:text-lg xl:px-12 xl:py-7' href='/'>Get Resume <BiDownload className='inline-block h-5 text-2xl font-bold' /></a>
            </div>

            <div className='md:hidden'>
                <span className='w-[440px] h-[440px] absolute border-[rgba(255,255,255,.2)] border-[1px] rounded-full block top-[-30%] left-[-15%] opacity-100'></span>
                <span className='w-[560px] h-[560px] absolute border-[rgba(255,255,255,.3)] border-[1px] rounded-full block top-[-35%] left-[-19%] opacity-100'></span>
                <span className='w-[700px] h-[700px] absolute border-[rgba(255,255,255,.4)] border-[1px] rounded-full block top-[-40%] left-[-23%] opacity-100'></span>
            </div>

            <div className='md:hidden'>
                <span className='w-[440px] h-[440px] absolute border-[rgba(255,255,255,.2)] border-[1px] rounded-full block top-[85%] left-[-14%] opacity-100'></span>
                <span className='w-[560px] h-[560px] absolute border-[rgba(255,255,255,.3)] border-[1px] rounded-full block top-[80%] left-[-16%] opacity-100'></span>
                <span className='w-[700px] h-[700px] absolute border-[rgba(255,255,255,.4)] border-[1px] rounded-full block top-[74%] left-[-20%] opacity-100'></span>
            </div>

            <div className='absolute 2xl:bottom-0 md:w-[280px] lg:top-[35%] lg:right-[30%] lg:w-[315px] xl:top-40 xl:right-[15%] 2xl:right-[10%] 2xl:top-auto 2xl:left-auto xl:w-auto'>
                <div>
                    <img className='relative z-10 mr-10 pt-28absolute' src={jose} alt='jose img'/>
                    <div>
                        <div className='border-[rgba(255,255,255,.2)] border-[2px] border-l-0 absolute lg:rounded-r-[250px] lg:w-[260px] lg:h-[464px] lg:left-[67%] lg:bottom-[4%] xl:rounded-r-[350px] xl:w-[350px] xl:h-[600px] xl:left-[55%]  xl:bottom-[10%]'></div>
                    </div>
                    <div>
                        <a className='text-white text-xl bg-[#262626] absolute lg:top-[20%] lg:left-[113%] xl:left-[500px] xl:top-[190px] 2xl:left-[490px] 2xl:top-[180px] w-16 h-16 border-2 border-white rounded-full p-[20px]' href='https://www.linkedin.com/in/jose-lezama/' target='_blank' rel="noreferrer"><BsLinkedin/></a>
                        <a className='text-white text-2xl bg-[#262626] absolute lg:top-[48%] lg:left-[137%] xl:left-[575px] xl:top-[23rem] 2xl:left-[575px] 2xl:top-[23rem] w-16 h-16 border-2 border-white rounded-full p-[18px]' href='https://github.com/itunz1' target='_blank' rel="noreferrer"><FiGithub /></a>
                        <a className='text-white text-2xl bg-[#262626] absolute lg:top-[80%] lg:left-[113%] xl:left-[510px] xl:top-[570px]  2xl:left-[510px] 2xl:top-[575px] w-16 h-16 border-2 border-white rounded-full p-[18px]' href='https://www.facebook.com/jose.lezama.562/' target='_blank' rel="noreferrer"><CiFacebook className='text-3xl top-[25%] left-[25%] absolute' /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
