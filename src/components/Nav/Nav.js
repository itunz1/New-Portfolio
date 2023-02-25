import React from 'react'


export default function Nav() {
    return (
        <div  className='flex justify-between mx-auto h-24 items-center bg-[#262626] text-white px-[4.6rem]'>
            <div>
                Logo
            </div>
            <div>
                <ul className='flex gap-14'>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Skills</a></li>
                    <li><a href='/'>Proyects</a></li>
                    <li><a href='/'>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}
