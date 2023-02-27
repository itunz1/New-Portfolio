import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import project1 from '../../images/omnifood.png';
import project2 from '../../images/videogames.png';
import project3 from '../../images/project3.gif';
import project4 from '../../images/project4.gif';
import project5 from '../../images/project5.gif';
import project6 from '../../images/postit.png';
import project7 from '../../images/glasswebsite.png';

export default class Proyects extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true
        };

        return (
            <div className="relative mx-auto w-12/12">
                <div className="relative ">
                <h2 className='max-w-xs mb-20 text-6xl text-white'>Proyects</h2>
                <div className="w-full h-1 mx-auto bg-gray-100 border-0 rounded dark:bg-gray-700 absolute top-[227%]"></div>
                </div>

                <Slider className="w-40 border-2 border-white" {...settings}>
                    <div className="flex items-center justify-center">
                        <h3 className="pt-5 text-3xl text-center tracking-wide text-white bg-[#262626]">Onmifood Proyect</h3>
                        <img className="pb-20 pt-5 px-20 bg-[#262626]" src={project1} alt='img' />
                        <div className="flex justify-center mt-4 mb-2 gap-x-10">
                            <a className="btn" target='_blank' rel="noreferrer" href="https://omnii-foood.netlify.app/">Site</a>
                            <a className="btn" target='_blank' rel="noreferrer" href="https://github.com/itunz1/Omnifood-project">Code</a>
                        </div>
                        <p className="text-[#858792] text-center">React / Food / Template</p>
                    </div>

                    <div className="flex items-center justify-center">
                        <h3 className="pt-5 text-3xl text-center tracking-wide text-white bg-[#262626]">VideoGames Proyect</h3>
                        <img className="pb-20 pt-5 px-20 bg-[#262626]" src={project2} alt='img' />
                        <div className="flex justify-center mt-4 mb-2 gap-x-10">
                            <a className="btn" target='_blank' rel="noreferrer" href="https://videogames-beta.vercel.app/">Site</a>
                            <a className="btn" target='_blank' rel="noreferrer" href="https://github.com/itunz1/VideoGames">Code</a>
                        </div>
                        <p className="text-[#858792] text-center">React / Food / Template</p>
                    </div>

                    <div className="flex items-center justify-center">
                        <h3 className="pt-5 text-3xl text-center tracking-wide text-white bg-[#262626]">Pokemon Proyect</h3>
                        <img className="pb-20 pt-5 px-20 bg-[#262626]" src={project4} alt='img' />
                        <div className="flex justify-center mt-4 mb-2 gap-x-10">
                            <a className="btn" target='_blank' rel="noreferrer" href="https://pokemon-xi-green.vercel.app/">Site</a>
                            <a className="btn" target='_blank' rel="noreferrer" href="https://github.com/itunz1/PokemonPI">Code</a>
                        </div>
                        <p className="text-[#858792] text-center">React / Food / Template</p>
                    </div>

                    <div className="flex items-center justify-center">
                        <h3 className="pt-5 text-3xl text-center tracking-wide text-white bg-[#262626]">Ecommerce Proyect</h3>
                        <img className="pb-20 pt-5 px-20 bg-[#262626]" src={project5} alt='img' />
                        <div className="flex justify-center mt-4 mb-2 gap-x-10">
                            <a className="btn" target='_blank' rel="noreferrer" href="https://carsmarket.vercel.app/">Site</a>
                            <a className="btn" target='_blank' rel="noreferrer" href="https://github.com/itunz1/carsmarket">Code</a>
                        </div>
                        <p className="text-[#858792] text-center">React / Food / Template</p>
                    </div>

                    <div className="flex items-center justify-center">
                        <h3 className="pt-5 text-3xl text-center tracking-wide text-white bg-[#262626]">Utility</h3>
                        <img className="pb-20 pt-5 px-20 bg-[#262626]" src={project3} alt='img' />
                        <div className="flex justify-center mt-4 mb-2 gap-x-10">
                            <a className="btn" target='_blank' rel="noreferrer" href="https://utility-components.netlify.app/">Site</a>
                            <a className="btn" target='_blank' rel="noreferrer" href="https://github.com/itunz1/Utility-Aps">Code</a>
                        </div>
                        <p className="text-[#858792] text-center">React / Food / Template</p>
                    </div>

                    <div className="flex items-center justify-center">
                        <h3 className="pt-5 text-3xl text-center tracking-wide text-white bg-[#262626]">PostIT Proyect</h3>
                        <img className="pb-20 pt-5 px-20 bg-[#262626]" src={project6} alt='img' />
                        <div className="flex justify-center mt-4 mb-2 gap-x-10">
                            <a className="btn" target='_blank' rel="noreferrer" href="https://postsz-comments.netlify.app/">Site</a>
                            <a className="btn" target='_blank' rel="noreferrer" href="https://github.com/itunz1/Post-Comment-proytect">Code</a>
                        </div>
                        <p className="text-[#858792] text-center">React / Food / Template</p>
                    </div>

                    <div className="flex items-center justify-center">
                        <h3 className="pt-5 text-3xl text-center tracking-wide text-white bg-[#262626]">Glass Design</h3>
                        <img className="pb-20 pt-5 px-20 bg-[#262626]" src={project7} alt='img' />
                        <div className="flex justify-center mt-4 mb-2 gap-x-10">
                            <a className="btn" target='_blank' rel="noreferrer" href="https://github.com/itunz1/Glass-website">Code</a>
                        </div>
                        <p className="text-[#858792] text-center">React / Food / Template</p>
                    </div>
                </Slider>
            </div>
        );
    }
}
