import React, { useEffect } from "react";
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
import project8 from '../../images/bankWeb.png';
import project9 from '../../images/memoryGame.png';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";




function Section({ children, index }) {

    const control = useAnimation()
    const [ref, inView] = useInView({ triggerOnce: true })

    const boxVariant = {
        visible: { opacity: 1, scale: 1, x: [-1000, 0], transition: { duration: 2 } },
        hidden: { opacity: 0, scale: 1, }
    };

    const boxVariant2 = {
        visible: { opacity: 1, scale: 1, x: [1000, 0], transition: { duration: 2 } },
        hidden: { opacity: 0, scale: 1, }
    };

    useEffect(() => {
        if (inView) {
            control.start('visible');
        } else {
            control.start('hidden');
        }
    }, [control, inView])


    return (
        <div className="px-1">
            <motion.div
                ref={ref}
                variants={index % 2 !== 0 ? boxVariant2 : boxVariant}
                className={`${index % 2 !== 0 ? 'flex-col lg:flex-row-reverse' : null } ${index !== cardData.length - 1 ? 'mb-32' : 'mb-32'} w-[100%] flex-col lg:flex-row justify-between flex items-center text-white feedback-card rounded-xl border border-white`}
                initial="hidden"
                animate={control}
            >
                {children}
            </motion.div>

        </div>
    )
}



function Proyects() {


    const settings = {
        className: "p-5 md:p-8 lg:p-5 xl:p-0",
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
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
        <>
            <div className="relative">
                <h2 className='mb-10 lg:mb-20 relative z-10 bg-[#252734] w-min py-2 px-5 text-4xl ml-2 md:ml-5 lg:ml-7 lg:text-5xl xl:text-6xl xl:ml-0 text-white border-[1px] border-[rgba(255,255,255,.5)] shadow-custom font-medium rounded-xl'>Proyects</h2>
                <div className="w-full absolute h-[1px] top-[50%] bg-[rgba(255,255,255,.5)] ml-10"></div>
            </div>

            <div>
                {cardData.map((el, index) => {
                    return (
                        <Section index={index} key={el.id}>
                            <div className="p-7">
                                <img className="w-[400px] h-[300px] flex flex-1 rounded-lg" src={el.img} alt='img' />
                            </div>
                            <div className="flex-1 p-7">
                                <h3 className="inline text-3xl font-bold text-white">{el.title}</h3>
                                <br />
                                <br />
                                <p className="text-[#858792] text-sm sm:text-base xl:text-lg">{el.content}</p>
                                <br />
                                <p className="text-[#858792] text-sm sm:text-base xl:text-lg">{el.tech}</p>
                                <br />
                                <a className={`btn ${el.site ? el.site : 'hidden'}`} target='_blank' rel="noreferrer" href={el.site}>Site</a>
                                <a className="btn" target='_blank' rel="noreferrer" href={el.code}>Code</a>
                            </div>
                        </Section>
                    )
                })}
            </div>

            <div className="">
                <h2 className="mb-10 text-5xl font-bold text-white">Articles</h2>
                <Slider {...settings}>
                    <div className="flex items-center justify-center">
                        <h3 className="proyect-title">Post-IT</h3>
                        <img className="proyect-img" src={project6} alt='img' />
                        <div className="btn-container">
                            <a className="btn" target='_blank' rel="noreferrer" href="https://postsz-comments.netlify.app/">Site</a>
                            <a className="btn" target='_blank' rel="noreferrer" href="https://github.com/itunz1/Post-Comment-proytect">Code</a>
                        </div>
                        <p className="sub-title">React-NextJs / Post-it Application</p>
                    </div>

                    <div className="flex items-center justify-center">
                        <h3 className="proyect-title">Utility</h3>
                        <img className="proyect-img" src={project3} alt='img' />
                        <div className="btn-container">
                            <a className="btn" target='_blank' rel="noreferrer" href="https://utility-components.netlify.app/">Site</a>
                            <a className="btn" target='_blank' rel="noreferrer" href="https://github.com/itunz1/Utility-Aps">Code</a>
                        </div>
                        <p className="sub-title">React / Reusable Components</p>
                    </div>

                    <div className="flex items-center justify-center">
                        <h3 className="proyect-title">Memory Card Game</h3>
                        <img className="proyect-img" src={project9} alt='img' />
                        <div className="btn-container">
                            <a className="btn" target='_blank' rel="noreferrer" href="https://utility-components.netlify.app/">Site</a>
                            <a className="btn" target='_blank' rel="noreferrer" href="https://github.com/itunz1/Memory-card-game">Code</a>
                        </div>
                        <p className="sub-title">React / Reusable Components</p>
                    </div>
                </Slider>
            </div>
        </>
    )
}



export default Proyects


const cardData = [
    {
        id: "project5",
        title: "CarsMarket",
        tech: "React Redux TailwindCSS / PostgresSQL MercadoPago Auth0 Cloudinary Railway / Ecommerce",
        img: project5,
        content: `This is a well made Ecommerce with a team of 5 colleague where you can post, buy or sell
        any vehicle.
        I worked in the front doing the section where you can see all the details of any post made
        by any user, in this section if you are registered you can add/remove the article to
        favorites, leave comments, reviews and push the buy button, if you decide to buy the
        article you are redirected to fill a form to contact the seller and you will receive an email
        with all the instructions, also you can see the seller reputation from 0 to 5 stars.
        In colaboration with the team in the back to make sure that all the data is working
        correctly, i made the form to post your vehicle implementing all the validations needed.
        `,
        code: "https://github.com/itunz1/carsmarket",
        site: "https://carsmarket.vercel.app/",
    },
    {
        id: "proyect3",
        title: "Pokamon App & Videogames APP",
        tech: "Css Javascript React Redux / PostgreSQL Express AWS",
        img: project4,
        content: `I made this 2 proyect individually where you can find your favorite pokemon/videogame
        by fetching data from a public API storing the data into a database, added some features
        like a search bar, some filters and a form to create your personal pokemon/videogame`,
        code: "https://github.com/itunz1/PokemonPI",
    },
    {
        id: "proyect1",
        title: "Omnifood",
        tech: "HTML-CSS Javascript / Food Responsive Website",
        img: project1,
        content: `This is a full responsive website for client exhibition using UI/UX principies, aplaying pure
        HTML/CSS and querys.`,
        code: "https://github.com/itunz1/Omnifood-project",
        site: "https://omnii-foood.netlify.app/",
    },
    {
        id: "proyect8",
        title: "Moderm Website",
        tech: "Javascript / TailwindCSS  / React / Food Responsive Website",
        img: project8,
        content: `This is a full responsive website for client exhibition using UI/UX principies`,
        code: "https://github.com/itunz1/Moderm-Website",
    },

]
