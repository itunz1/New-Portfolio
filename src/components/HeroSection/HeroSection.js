import { BiDownload } from 'react-icons/bi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import { Tabs, Tab } from "@nextui-org/react";
import { langContext } from '../../context/langContext';
import React, { useContext } from 'react';
import US from "./../../images/us.png";
import ES from "./../../images/es.png";




export function HeroSection() {

    const languaje = useContext(langContext)

    function openGithub() {
        window.open('https://github.com/itunz1')
    };

    function openLinkedin() {
        window.open('https://www.linkedin.com/in/jose-lezama/')
    };


    return (
        <div className='flex flex-col items-center'>
            <div className="flex flex-col items-end w-full mr-[20px] md:mr-32">
                <Tabs aria-label="Options" color="primary" variant="bordered">
                    <Tab key="ES"
                        title={
                            <div onClick={() => languaje.changeLang("en-US")} className="flex items-center w-[20px] md:w-[40px] space-x-2">
                                <img className='w-[100%] md:w-[50%] text-center' src={US} alt='United State Flag'/>
                                <span className='hidden md:inline'>EN</span>
                            </div>
                        } />
                    <Tab key="EN"
                        title={
                            <div onClick={() => languaje.changeLang("es-MX")} className="flex items-center space-x-2  w-[20px]  md:w-[40px]">
                                <img className='w-[100%] md:w-[50%] text-center' src={ES} alt='Espain Flag'/>
                                <span className='hidden md:inline'>ES</span>
                            </div>
                        } />
                </Tabs>
            </div>
            <div className='z-3 max-w-[1200px] flex flex-col justify-center items-center px-[8px] py-[24px] mt-[120px] sm:mt-[200px]'>
                <Typewriter
                    options={{
                        wrapperClassName: "text-[#fff59d] text-[54px] sm:text-[88px] Typewriter__wrapper drop-shadow-[0_0_5px] font-cormorant font-bold",
                        cursorClassName: "text-white Typewriter__cursor text-5xl sm:text-[78px]",
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString('Jose Lezama')
                            .start();
                    }}
                />
                <div className='flex flex-row justify-center items-center p-[30px]'>
                    <p className='mt-[10px] text-white text-[100px] text-center max-w-[600px] md:p-[70px] cursor-pointer hover:text-[#fff59d] hover:scale-125 hover:transition ease-in-out delay-2000 ml-[55px] md:ml-0'>
                        <FaGithub onClick={openGithub} />
                    </p>
                    <p className='mt-[10px] text-white text-[100px] text-center max-w-[600px] p-[70px] cursor-pointer hover:text-[#fff59d] hover:scale-125 hover:transition ease-in-out delay-2000'>
                        <FaLinkedin onClick={openLinkedin} />
                    </p>
                </div>
            </div>
        </div>
    )
}


export default HeroSection