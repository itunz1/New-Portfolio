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
        <div className='relative'>
            <h2 className='mb-20 relative z-10 bg-[#262626] w-min py-2 px-5 text-6xl text-white border-[1px] border-[rgba(255,255,255,.5)] shadow-3xl shadow-[inset_0_0_9px_rgb(255 255 255 / 70%)] font-normal'>Skills</h2>
            <div className="w-full absolute h-[1px] bg-white top-[40px]"></div>
            <div className='grid grid-cols-2'>
                <h3 className='w-10/12 text-2xl text-center text-white'>Special Skills</h3>
                <h3 className='mb-8 text-2xl text-center text-white'>Tech Skills</h3>
            </div>

            <div className='flex justify-between'>
                <div className='w-5/12 '>
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
