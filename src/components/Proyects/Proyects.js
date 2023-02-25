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
            <div className="w-12/12 mx-auto">

                <h2 className='text-white text-6xl mb-20'>Proyects</h2>

                <Slider className="w-40" {...settings}>
                    <div className="flex justify-center items-center">
                        <img className="p-20 bg-[#262626]" src={project1} alt='img' />
                        <h3 className="text-white mb-1 text-center text-2xl">Onmifood Proyect</h3>
                        <p className="text-[#858792] text-center mb-5">React / Food / Template</p>
                        <div className="mb-5 flex justify-center gap-x-10">
                            <a className="btn" target='_blank' rel="noreferrer" href="https://omnii-foood.netlify.app/">Site</a>
                            <a className="btn" target='_blank' rel="noreferrer" href="https://github.com/itunz1/Omnifood-project">Code</a>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <img className="p-20 bg-[#262626]" src={project2} alt='img' />
                        <h3 className="text-white mb-1 text-center text-2xl">VideoGames Proyect</h3>
                        <p className="text-[#858792] text-center mb-5">React / Food / Template</p>
                        <div className="mb-5 flex justify-center gap-x-10">
                            <a className="btn" target='_blank' rel="noreferrer" href="https://videogames-beta.vercel.app/">Site</a>
                            <a className="btn" target='_blank' rel="noreferrer" href="https://github.com/itunz1/VideoGames">Code</a>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <img className="p-20 bg-[#262626]" src={project4} alt='img' />
                        <h3 className="text-white mb-1 text-center text-2xl">Pokemon Proyect</h3>
                        <p className="text-[#858792] text-center mb-5">React / Food / Template</p>
                        <div className="mb-5 flex justify-center gap-x-10">
                            <a className="btn" target='_blank' rel="noreferrer" href="https://pokemon-xi-green.vercel.app/">Site</a>
                            <a className="btn" target='_blank' rel="noreferrer" href="https://github.com/itunz1/PokemonPI">Code</a>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <img className="p-20 bg-[#262626]" src={project5} alt='img' />
                        <h3 className="text-white mb-1 text-center text-2xl">Ecommerce Proyect</h3>
                        <p className="text-[#858792] text-center mb-5">React / Food / Template</p>
                        <div className="mb-5 flex justify-center gap-x-10">
                            <a className="btn" target='_blank' rel="noreferrer" href="https://carsmarket.vercel.app/">Site</a>
                            <a className="btn" target='_blank' rel="noreferrer" href="https://github.com/itunz1/carsmarket">Code</a>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <img className="p-20 bg-[#262626]" src={project3} alt='img' />
                        <h3 className="text-white mb-1 text-center text-2xl">Utility</h3>
                        <p className="text-[#858792] text-center mb-5">React / Food / Template</p>
                        <div className="mb-5 flex justify-center gap-x-10">
                            <a className="btn" target='_blank' rel="noreferrer" href="https://utility-components.netlify.app/">Site</a>
                            <a className="btn" target='_blank' rel="noreferrer" href="https://github.com/itunz1/Utility-Aps">Code</a>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <img className="p-20 bg-[#262626]" src={project6} alt='img' />
                        <h3 className="text-white mb-1 text-center text-2xl">PostIT Proyect</h3>
                        <p className="text-[#858792] text-center mb-5">React / Food / Template</p>
                        <div className="mb-5 flex justify-center gap-x-10">
                            <a className="btn" target='_blank' rel="noreferrer" href="https://postsz-comments.netlify.app/">Site</a>
                            <a className="btn" target='_blank' rel="noreferrer" href="https://github.com/itunz1/Post-Comment-proytect">Code</a>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <img className="p-20 bg-[#262626]" src={project7} alt='img' />
                        <h3 className="text-white mb-1 text-center text-2xl">Glass Design</h3>
                        <p className="text-[#858792] text-center mb-5">React / Food / Template</p>
                        <div className="mb-5 flex justify-center gap-x-10">
                            <a className="btn" target='_blank' rel="noreferrer" href="https://github.com/itunz1/Glass-website">Code</a>
                        </div>
                    </div>

                </Slider>
            </div>
        );
    }
}
