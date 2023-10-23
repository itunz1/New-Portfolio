import React from 'react';
import { FormattedMessage } from 'react-intl';
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
    SiExpress,
    SiNextdotjs
} from "react-icons/si";

export default function Skills() {
    return (
        <div>
            <h2 className='mb-20 relative z-10 bg-[#252734] w-min py-2 px-5 text-[40px] ml-2 md:ml-5 lg:ml-7 lg:text-5xl xl:text-6xl xl:ml-0 text-white border-[1px] border-[rgba(255,255,255,.5)] shadow-custom font-medium rounded-xl'>
                <FormattedMessage id="skills.title" defaultMessage="Skills" />
            </h2>
            <div className="w-full absolute h-[1px] bg-[rgba(255,255,255,.5)] top-[14%] ml-7 sm:top-[14%] md:top-[12%] lg:top-[12%]"></div>
            {/* <div className='mb-5 md:grid-cols-2 md:grid sm:mb-6 lg:mb-auto'> */}
            {/* <h3 className='text-2xl text-center text-white md:w-10/12 md:text-2xl xl:text-3xl'>Special Skills</h3> */}
            <h3 className='mb-8 text-2xl font-bold text-center text-white md:block md:text-2xl xl:text-3xl'>
                <FormattedMessage id="skills.subtitle" defaultMessage="Tech Skills" />
            </h3>
            {/* </div> */}

            {/* <div className='flex flex-col mx-5 md:justify-between md:flex md:flex-row gap-x-9 lg:mx-auto lg:gap-x-auto lg:px-10 lg:gap-auto'> */}
            {/* <div className='sm:w-11/12 md:w-6/12 lg:w-5/12'> */}
            {/* <div className='shadow-xl special-skillbox shadow-current-500/40'>
                        <div className="special-box">
                            <div>Comunication</div>
                            <div>75%</div>
                        </div>
                        <div className="progres">
                            <div className="progres-bar" style={{ width: "75%" }}></div>
                        </div>
                    </div> */}

            {/* <div className='shadow-xl special-skillbox shadow-current-500/40'>
                        <div className="special-box">
                            <div>Leadership</div>
                            <div>70%</div>
                        </div>
                        <div className="progres">
                            <div className="progres-bar" style={{ width: "70%" }}></div>
                        </div>
                    </div> */}

            {/* <div className='shadow-xl special-skillbox shadow-current-500/40'>
                        <div className="special-box">
                            <div>Teamwork</div>
                            <div>90%</div>
                        </div>
                        <div className="progres">
                            <div className="progres-bar" style={{ width: "90%" }}></div>
                        </div>
                    </div> */}

            {/* <div className='shadow-xl special-skillbox shadow-current-500/40'>
                        <div className="special-box">
                            <div>Flexibility</div>
                            <div>80%</div>
                        </div>
                        <div className="progres">
                            <div className="progres-bar" style={{ width: "80%" }}></div>
                        </div>
                    </div> */}
            {/* </div> */}


            <div className='flex justify-center'>
                <div className='h-[480px] sm:h-fit mt-8 md:mt-0 p-8 grid grid-cols-3 items-center w-11/12 sm:p-12 sm:gap-y-8 md:p-10 md:h-[41rem] md:w-6/12 lg:px-10 lg:py-2 bg-[#2a2c39]'>
                    <div className='flex flex-col items-center text-xs sm:text-sm md:text-base text-[#1e88e5] text-center hover:-translate-y-1 duration-300'>
                        <SiCss3 className='text-[#1e88e5] text-[35px] mb-[5px] sm:text-[40px] md:text-[45px] lg:text-[55px] xl:text-[70px] md:mb-[8px]' /> css
                    </div>

                    <div className='flex flex-col items-center text-xs sm:text-sm md:text-base text-[#ff6e40] text-center hover:-translate-y-1 duration-300'>
                        <SiHtml5 className='text-[#ff6e40] text-[35px] mb-[5px] sm:text-[40px] md:text-[45px] lg:text-[55px] xl:text-[70px] md:mb-[8px]' /> html
                    </div>

                    <div className='flex flex-col items-center text-xs sm:text-sm md:text-base text-[#FFFFFF] text-center hover:-translate-y-1 duration-300'>
                        <SiExpress className='text-[#FFFFFF] text-[35px] mb-0 sm:text-[40px] md:text-[45px] lg:text-[55px] xl:text-[70px] md:mb-[8px]' />Express
                    </div>

                    <div className='flex flex-col items-center text-xs sm:text-sm md:text-base text-[#40c4ff] text-center hover:-translate-y-1 duration-300'>
                        <SiReact className='text-[#40c4ff] text-[35px] mb-[5px] sm:text-[40px] md:text-[45px] lg:text-[55px] xl:text-[70px] md:mb-[8px]' />React
                    </div>

                    <div className='flex flex-col items-center text-xs sm:text-sm md:text-base text-[#b388ff] text-center hover:-translate-y-1 duration-300'>
                        <SiRedux className='text-[#b388ff] text-[35px] mb-[5px] sm:text-[40px] md:text-[45px] lg:text-[55px] xl:text-[70px] md:mb-[8px]' />Redux
                    </div>

                    <div className='flex flex-col items-center text-xs sm:text-sm md:text-base text-[#9ccc65] text-center hover:-translate-y-1 duration-300'>
                        <SiNodedotjs className='text-[#9ccc65] text-[35px] mb-[5px] sm:text-[40px] md:text-[45px] lg:text-[55px] xl:text-[70px] md:mb-[8px]' />NodeJs
                    </div>

                    <div className='flex flex-col items-center text-xs sm:text-sm md:text-base text-[#ff5252] text-center hover:-translate-y-1 duration-300'>
                        <SiNpm className='text-[#ff5252] text-[35px] mb-[5px] sm:text-[40px] md:text-[45px] lg:text-[55px] xl:text-[70px] md:mb-[8px]' />Npm
                    </div>

                    <div className='flex flex-col items-center text-xs sm:text-sm md:text-base text-[#8e24aa] text-center hover:-translate-y-1 duration-300'>
                        <SiGithub className='text-[#8e24aa] text-[35px] mb-[5px] sm:text-[40px] md:text-[45px] lg:text-[55px] xl:text-[70px] md:mb-[8px]' />Github
                    </div>

                    <div className='flex flex-col items-center text-xs sm:text-sm md:text-base text-[#1565c0] text-center hover:-translate-y-1 duration-300'>
                        <SiPostgresql className='text-[#1565c0] text-[35px] mb-[5px] sm:text-[40px] md:text-[45px] lg:text-[55px] xl:text-[70px] md:mb-[8px]' />Postgres
                    </div>

                    <div className='flex flex-col items-center text-xs sm:text-sm md:text-base text-[#87cefa] text-center hover:-translate-y-1 duration-300'>
                        <SiSequelize className='text-[#87cefa] text-[35px] mb-[5px] sm:text-[40px] md:text-[45px] lg:text-[55px] xl:text-[70px] md:mb-[8px]' />Sequelize
                    </div>

                    <div className='flex flex-col items-center text-xs sm:text-sm md:text-base text-[#ffeb3b] text-center hover:-translate-y-1 duration-300'>
                        <SiJavascript className='text-[#ffeb3b] text-[35px] mb-[5px] sm:text-[40px] md:text-[45px] lg:text-[55px] xl:text-[70px] md:mb-[8px]' />Javascript
                    </div>
                    <div className='flex flex-col items-center text-xs text-center text-white duration-300 sm:text-sm md:text-base hover:-translate-y-1'>
                        <SiNextdotjs className='text-white text-[35px] mb-[5px] sm:text-[40px] md:text-[45px] lg:text-[55px] xl:text-[70px] md:mb-[8px]' />NextJs
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}
