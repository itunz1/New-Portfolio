import React from 'react';
import jose from '../../images/jose.png';
import { BiDownload } from 'react-icons/bi';
import { CiFacebook } from 'react-icons/ci';
import { FiGithub } from 'react-icons/fi';
import { BsLinkedin } from 'react-icons/bs';


export default function HeroSection() {
    return (
        <div className='bg-[#262626] flex justify-around px-24'>
            <div className='text-white pt-20'>
                <h3 className='text-8xl mt-20'>Hello! I’m</h3>
                <h2 className='text-9xl'>Jose Lezama</h2>
                <p className='mt-10 mb-16 text-xl text-[#858792]'>Full Stack Web Developer</p>
                <a className='flex gap-2 w-32' href='/'>Get Resume <BiDownload className='h-5'/></a>
            </div>
            <div>
                <span className='w-[440px] h-[440px] absolute border-[rgba(255,255,255,.2)] border-[1px] rounded-full block top-[-30%] left-[-15%] opacity-100'></span>
                <span className='w-[560px] h-[560px] absolute border-[rgba(255,255,255,.3)] border-[1px] rounded-full block top-[-35%] left-[-19%] opacity-100'></span>
                <span className='w-[700px] h-[700px] absolute border-[rgba(255,255,255,.4)] border-[1px] rounded-full block top-[-40%] left-[-23%] opacity-100'></span>
            </div>
            <div className='absoute'>
                <span className='w-[440px] h-[440px] absolute border-[rgba(255,255,255,.2)] border-[1px] rounded-full block top-[85%] left-[-14%] opacity-100'></span>
                <span className='w-[560px] h-[560px] absolute border-[rgba(255,255,255,.3)] border-[1px] rounded-full block top-[80%] left-[-16%] opacity-100'></span>
                <span className='w-[700px] h-[700px] absolute border-[rgba(255,255,255,.4)] border-[1px] rounded-full block top-[74%] left-[-20%] opacity-100'></span>
            </div>
            <div className='relative'>
                <img className='mr-10 pt-28 relative z-10' src={jose} alt='jose img'/>
                <div className='w-[350px] h-[600px] border-[rgba(255,255,255,.25)] border-[2px] border-l-0 absolute left-[60%] bottom-[10%] rounded-r-[350px]'></div>
                <div>
                    <a className='text-white text-xl bg-[#262626] absolute left-[480px] top-[245px] w-16 h-16 border-2 border-white rounded-full p-[20px]' href='https://www.linkedin.com/in/jose-lezama/' target='_blank' rel="noreferrer"><BsLinkedin/></a>
                    <a className='text-white text-2xl bg-[#262626] absolute left-[605px] top-[30rem] w-16 h-16 border-2 border-white rounded-full p-[18px]' href='https://github.com/itunz1' target='_blank' rel="noreferrer"><FiGithub/></a>
                    <a className='text-white text-2xl bg-[#262626] absolute left-[480px] top-[730px] w-16 h-16 border-2 border-white rounded-full p-[18px]' href='https://www.facebook.com/jose.lezama.562/' target='_blank' rel="noreferrer"><CiFacebook/></a>
                </div>
            </div>
        </div>
    )
}
