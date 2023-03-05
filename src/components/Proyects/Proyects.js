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
            className: "p-5 md:p-8 lg:p-5 xl:p-0",
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        };

        return (
            <div className="mx-auto w-12/12">
                <div className="relative">
                    <h2 className='mb-10 lg:mb-20 relative z-10 bg-[#252734] w-min py-2 px-5 text-4xl ml-2 md:ml-5 lg:ml-7 lg:text-5xl xl:text-6xl xl:ml-0 text-white border-[1px] border-[rgba(255,255,255,.5)] shadow-custom font-medium rounded-xl'>Proyects</h2>
                    <div className="w-full absolute h-[1px] top-[50%] bg-[rgba(255,255,255,.5)] ml-10"></div>
                </div>

                <Slider {...settings}>
                    <div className="flex items-center justify-center">
                        <h3 className="proyect-title">Onmifood</h3>
                        <img className="proyect-img" src={project1} alt='img' />
                        <div className="btn-container">
                            <a className="btn" target='_blank' rel="noreferrer" href="https://omnii-foood.netlify.app/">Site</a>
                            <a className="btn" target='_blank' rel="noreferrer" href="https://github.com/itunz1/Omnifood-project">Code</a>
                        </div>
                        <p className="sub-title">HTML-CSS / Food Website / Course /Template</p>
                    </div>

                    <div className="flex items-center justify-center ">
                        <h3 className="proyect-title">VideoGames</h3>
                        <img className="proyect-img" src={project2} alt='img' />
                        <div className="btn-container">
                            <a className="btn" target='_blank' rel="noreferrer" href="https://videogames-beta.vercel.app/">Site</a>
                            <a className="btn" target='_blank' rel="noreferrer" href="https://github.com/itunz1/VideoGames">Code</a>
                        </div>
                        <p className="sub-title">React-Redux-CSS-PostgresSQL / App / Personal / Template</p>
                    </div>

                    <div className="flex items-center justify-center">
                        <h3 className="proyect-title">Pokemon</h3>
                        <img className="proyect-img" src={project4} alt='img' />
                        <div className="btn-container">
                            <a className="btn" target='_blank' rel="noreferrer" href="https://pokemon-xi-green.vercel.app/">Site</a>
                            <a className="btn" target='_blank' rel="noreferrer" href="https://github.com/itunz1/PokemonPI">Code</a>
                        </div>
                        <p className="sub-title">React-Redux-CSS-PostgresSQL / App / Bootcamp</p>
                    </div>

                    <div className="flex items-center justify-center">
                        <h3 className="proyect-title">Ecommerce</h3>
                        <img className="proyect-img" src={project5} alt='img' />
                        <div className="btn-container">
                            <a className="btn" target='_blank' rel="noreferrer" href="https://carsmarket.vercel.app/">Site</a>
                            <a className="btn" target='_blank' rel="noreferrer" href="https://github.com/itunz1/carsmarket">Code</a>
                        </div>
                        <p className="sub-title">React-Redux-CSS-PostgresSQL-MercadoPago-Auth0 / Ecommerce</p>
                    </div>

                    <div className="flex items-center justify-center">
                        <h3 className="proyect-title">Utility</h3>
                        <img className="proyect-img" src={project3} alt='img' />
                        <div className="btn-container">
                            <a className="btn" target='_blank' rel="noreferrer" href="https://utility-components.netlify.app/">Site</a>
                            <a className="btn" target='_blank' rel="noreferrer" href="https://github.com/itunz1/Utility-Aps">Code</a>
                        </div>
                        <p className="sub-title">React / Utility Apps / Reusable Components</p>
                    </div>

                    <div className="flex items-center justify-center">
                        <h3 className="proyect-title">PostIT</h3>
                        <img className="proyect-img" src={project6} alt='img' />
                        <div className="btn-container">
                            <a className="btn" target='_blank' rel="noreferrer" href="https://postsz-comments.netlify.app/">Site</a>
                            <a className="btn" target='_blank' rel="noreferrer" href="https://github.com/itunz1/Post-Comment-proytect">Code</a>
                        </div>
                        <p className="sub-title">React-NextJs / Post-Comment / Component</p>
                    </div>

                    <div className="flex items-center justify-center">
                        <h3 className="proyect-title">Glass Design</h3>
                        <img className="proyect-img" src={project7} alt='img' />
                        <div className="btn-container">
                            <a className="btn" target='_blank' rel="noreferrer" href="https://github.com/itunz1/Glass-website">Code</a>
                        </div>
                        <p className="sub-title">HTML-CSS / Glass Website / Design Template</p>
                    </div>
                </Slider>
            </div>
        );
    }
}
