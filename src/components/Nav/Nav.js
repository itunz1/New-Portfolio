import React from 'react'


export default function Nav() {
    return (
        <div className='py-5'>
            <div className='flex justify-between mx-auto h-24 items-center bg-[#252734] text-white px-[4.6rem] w-full'>
                <div>
                    Logo
                </div>
                <div>
                    <ul className='flex text-lg gap-14'>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Skills</a></li>
                        <li><a href='/'>Proyects</a></li>
                        <li><a href='/'>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
