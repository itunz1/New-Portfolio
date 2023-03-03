import React from 'react';
import {
    SiCss3,
    SiHtml5,
    SiJavascript,
    SiGithub,
    SiReact,
    SiPostgresql,
    SiNpm,
    SiNodedotjs,
    SiRedux,
    SiSequelize,
    SiExpress
} from "react-icons/si";

export default function Skills() {
    return (
        <div>
            <h2 className='mb-20 relative z-10 bg-[#252734] w-min py-2 px-5 text-3xl ml-2 md:text-4xl md:ml-5 lg:ml-7 lg:text-5xl xl:text-6xl xl:ml-0 text-white border-[1px] border-[rgba(255,255,255,.5)] shadow-custom font-medium rounded-xl'>Skills</h2>
            <div className="w-full absolute h-[1px] bg-[rgba(255,255,255,.5)] top-[12%] md:ml-7"></div>
            <div className='mb-5 md:grid-cols-2 md:grid sm:mb-6 lg:mb-auto'>
                <h3 className='text-2xl text-center text-white md:w-10/12 md:text-2xl xl:text-3xl'>Special Skills</h3>
                <h3 className='hidden mb-8 text-center text-white md:block md:text-2xl xl:text-3xl'>Tech Skills</h3>
            </div>

            <div className='flex flex-col mx-5 md:justify-between md:flex md:flex-row gap-x-9 lg:mx-auto lg:gap-x-auto lg:px-10 lg:gap-auto'>
                <div className='sm:w-11/12 md:w-6/12 lg:w-5/12'>
                    <div className='shadow-xl special-skillbox shadow-current-500/40'>
                        <div className="special-box">
                            <div>Comunication</div>
                            <div>75%</div>
                        </div>
                        <div className="progres">
                            <div className="progres-bar" style={{ width: "75%" }}></div>
                        </div>
                    </div>

                    <div className='shadow-xl special-skillbox shadow-current-500/40'>
                        <div className="special-box">
                            <div>Leadership</div>
                            <div>70%</div>
                        </div>
                        <div className="progres">
                            <div className="progres-bar" style={{ width: "70%" }}></div>
                        </div>
                    </div>

                    <div className='shadow-xl special-skillbox shadow-current-500/40'>
                        <div className="special-box">
                            <div>Teamwork</div>
                            <div>90%</div>
                        </div>
                        <div className="progres">
                            <div className="progres-bar" style={{ width: "90%" }}></div>
                        </div>
                    </div>

                    <div className='shadow-xl special-skillbox shadow-current-500/40'>
                        <div className="special-box">
                            <div>Flexibility</div>
                            <div>80%</div>
                        </div>
                        <div className="progres">
                            <div className="progres-bar" style={{ width: "80%" }}></div>
                        </div>
                    </div>
                </div>

                <div className='h-[25rem] grid grid-cols-3 items-center sm:w-11/12 sm:p-12 sm:gap-y-8 md:p-10 md:h-[41rem] md:w-6/12 lg:px-10 lg:py-2 bg-[#2a2c39]'>

                    <div className='flex flex-col items-center sm:text-sm md:text-base text-[#1e88e5] text-center hover:-translate-y-1 duration-300'>
                        <SiCss3 className='text-[#1e88e5] text-[35px] sm:text-[40px] md:text-[45px] lg:text-[55px] xl:text-[70px] md:mb-[8px]' /> css
                    </div>

                    <div className='flex flex-col items-center sm:text-sm md:text-base text-[#ff6e40] text-center hover:-translate-y-1 duration-300'>
                        <SiHtml5 className='text-[#ff6e40] text-[35px] sm:text-[40px] md:text-[45px] lg:text-[55px] xl:text-[70px] md:mb-[8px]' /> html
                    </div>

                    <div className='flex flex-col items-center sm:text-sm md:text-base text-[#8e24aa] text-center hover:-translate-y-1 duration-300'>
                        <SiGithub className='text-[#8e24aa] text-[35px] sm:text-[40px] md:text-[45px] lg:text-[55px] xl:text-[70px] md:mb-[8px]' />Github
                    </div>

                    <div className='flex flex-col items-center sm:text-sm md:text-base text-[#40c4ff] text-center hover:-translate-y-1 duration-300'>
                        <SiReact className='text-[#40c4ff] text-[35px] sm:text-[40px] md:text-[45px] lg:text-[55px] xl:text-[70px] md:mb-[8px]' />React
                    </div>

                    <div className='flex flex-col items-center sm:text-sm md:text-base text-[#b388ff] text-center hover:-translate-y-1 duration-300'>
                        <SiRedux className='text-[#b388ff] text-[35px] sm:text-[40px] md:text-[45px] lg:text-[55px] xl:text-[70px] md:mb-[8px]' />Redux
                    </div>

                    <div className='flex flex-col items-center sm:text-sm md:text-base text-[#9ccc65] text-center hover:-translate-y-1 duration-300'>
                        <SiNodedotjs className='text-[#9ccc65] text-[35px] sm:text-[40px] md:text-[45px] lg:text-[55px] xl:text-[70px] md:mb-[8px]' />NodeJs
                    </div>

                    <div className='flex flex-col items-center sm:text-sm md:text-base text-[#ff5252] text-center hover:-translate-y-1 duration-300'>
                        <SiNpm className='text-[#ff5252] text-[35px] sm:text-[40px] md:text-[45px] lg:text-[55px] xl:text-[70px] md:mb-[8px]' />Npm
                    </div>

                    <div className='flex flex-col items-center sm:text-sm md:text-base text-[#FFFFFF] text-center hover:-translate-y-1 duration-300'>
                        <SiExpress className='text-[#FFFFFF] text-[35px] sm:text-[40px] md:text-[45px] lg:text-[55px] xl:text-[70px] md:mb-[8px]' />Express
                    </div>

                    <div className='flex flex-col items-center sm:text-sm md:text-base text-[#1565c0] text-center hover:-translate-y-1 duration-300'>
                        <SiPostgresql className='text-[#1565c0] text-[35px] sm:text-[40px] md:text-[45px] lg:text-[55px] xl:text-[70px] md:mb-[8px]' />Postgres
                    </div>

                    <div className='flex flex-col items-center sm:text-sm md:text-base text-[#87cefa] text-center hover:-translate-y-1 duration-300'>
                        <SiSequelize className='text-[#87cefa] text-[35px] sm:text-[40px] md:text-[45px] lg:text-[55px] xl:text-[70px] md:mb-[8px]' />Sequelize
                    </div>

                    <div className='flex flex-col items-center sm:text-sm md:text-base text-[#ffeb3b] text-center hover:-translate-y-1 duration-300'>
                        <SiJavascript className='text-[#ffeb3b] text-[35px] sm:text-[40px] md:text-[45px] lg:text-[55px] xl:text-[70px] md:mb-[8px]' />Javascript
                    </div>

                </div>
            </div>
        </div>
    )
}
