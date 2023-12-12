import React from 'react'
import { FormattedMessage } from 'react-intl';
import { langContext } from '../../context/langContext';
import { useContext } from 'react';
// import resumen from '../../images/CVResumeEn.pdf';
// import resumenEsp from '../../images/CVResumeEs.pdf';

export default function About() {

    const languaje = useContext(langContext)
    
    const resume = () => {
        window.open('/CVResumeEn.pdf')
    }

    const resumeEs = () => {
        window.open('/CVResumeEs.pdf')
    }

    return (
        <div className='flex flex-col items-center px-5 h-fit lg:px-20 sm:px-10'>
            <h2 className='mb-10 text-5xl font-semibold text-center text-white xl:text-6xl'>
                <FormattedMessage id="about.title" defaultMessage="About" />
            </h2>
            <p className="text-[#858792] sm:text-base xl:text-lg inline-block">
                <FormattedMessage id="about.content" defaultMessage="N/A" />
            </p>

            {languaje.state === 'en-US' ? <button onClick={resume} className="mt-[50px] inline-flex items-center justify-center w-60  py-2 text-gray-800 bg-gray-300 rounded hover:bg-gray-400">
                <svg className="w-4 h-4 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                <span className='tracking-normal'>Download Resume</span>
            </button> : <button onClick={resumeEs} className="mt-[50px] inline-flex items-center justify-center w-60 px-4 py-2 text-gray-800 bg-gray-300 rounded hover:bg-gray-400">
                <svg className="w-4 h-4 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                <span>Descarga Resumen</span>
            </button>  }

            
        </div>
    )
}
