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
            <h2 className='mb-10 text-6xl text-white'>Skills</h2>
            <div className='grid grid-cols-2'>
                <h3 className='w-10/12 text-2xl text-center text-white'>Special Skills</h3>
                <h3 className='mb-8 text-2xl text-center text-white'>Tech Skills</h3>
            </div>

            <div className='flex justify-between'>
                <div className='w-5/12 '>
                    <div className='px-11 pb-12 pt-11 mb-6 bg-[#2a2c39] shadow-xl shadow-current-500/40 '>
                        <div className="mb-6 text-base font-medium text-[#858792] flex justify-between">
                            <div>Comunication</div>
                            <div>75%</div>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700">
                            <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full h-2" style={{ width: "75%" }}></div>
                        </div>
                    </div>

                    <div className='px-11 pb-12 pt-11 mb-6 bg-[#2a2c39] shadow-xl shadow-current-500/40'>
                        <div className="mb-6 text-base font-medium text-[#858792] flex justify-between">
                            <div>Leadership</div>
                            <div>70%</div>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700">
                            <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full h-2" style={{ width: "70%" }}></div>
                        </div>
                    </div>

                    <div className='px-11 pb-12 pt-11 mb-6 bg-[#2a2c39] shadow-xl shadow-current-500/40'>
                        <div className="mb-6 text-base font-medium text-[#858792] flex justify-between">
                            <div>Teamwork</div>
                            <div>90%</div>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700">
                            <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full h-2" style={{ width: "90%" }}></div>
                        </div>
                    </div>

                    <div className='px-11 pb-12 pt-11 bg-[#2a2c39] shadow-xl shadow-current-500/40'>
                        <div className="mb-6 text-base font-medium text-[#858792] flex justify-between">
                            <div>Flexibility</div>
                            <div>80%</div>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700">
                            <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full h-2" style={{ width: "80%" }}></div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center w-6/12 bg-[#2a2c39]'>
                    <div>
                        <div className='flex items-center justify-center gap-x-24 mb-14'>
                            <div className='text-base text-[#1e88e5] text-center'><SiCss3 style={{ color: '#1e88e5', fontSize: '70px', marginBottom: '8px' }} /> css</div>
                            <div className='text-base text-[#ff6e40] text-center'><SiHtml5 style={{ color: '#ff6e40', fontSize: '70px', marginBottom: '8px' }} /> html</div>
                            <div className='text-base text-[#8e24aa] text-center'><SiGithub style={{ color: '#8e24aa', fontSize: '70px', marginBottom: '8px' }} />Github</div>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center justify-center gap-x-24 mb-14'>
                            <div className='text-base text-[#40c4ff] text-center'><SiReact style={{ color: '#40c4ff', fontSize: '70px', marginBottom: '8px' }} />React</div>
                            <div className='text-base text-[#b388ff] text-center'><SiRedux style={{ color: '#b388ff', fontSize: '70px', marginBottom: '8px' }} />Redux</div>
                            <div className='text-base text-[#9ccc65] text-center'><SiNodedotjs style={{ color: '#9ccc65', fontSize: '70px', marginBottom: '8px' }} />NodeJs</div>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center justify-center gap-x-24 mb-14'>
                            <div className='text-base text-[#ff5252] text-center'><SiNpm style={{ color: '#ff5252', fontSize: '70px', marginBottom: '8px' }} />Npm</div>
                            <div className='text-base text-[#FFFFFF] text-center'><SiExpress style={{ color: '#FFFFFF', fontSize: '70px', marginBottom: '8px' }} />Express</div>
                            <div className='text-base text-[#1565c0] text-center'><SiPostgresql style={{ color: '#1565c0', fontSize: '70px', marginBottom: '8px' }} />Postgres</div>

                        </div>
                    </div>
                    <div>
                        <div className='flex items-center justify-center ml-5 gap-x-24'>
                            <div className='text-base text-[#87cefa] text-center'><SiSequelize style={{ color: '#87cefa', fontSize: '70px', marginBottom: '8px' }} />Sequelize</div>
                            <div className='text-base text-[#ffeb3b] text-center'><SiJavascript style={{ color: '#ffeb3b', fontSize: '70px', marginBottom: '8px', marginLeft: '8px' }} />Javascript</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
