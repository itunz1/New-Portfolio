import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import project3 from '../../images/project3.gif';
import project6 from '../../images/postit.png';
import project9 from '../../images/memoryGame.png';
import  cardData  from "../../data/data";
import Card from "../Card/Card";




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
        <div className="">
            <div className="relative">
                <h2 className='mb-10 lg:mb-20 relative z-10 bg-[#252734] w-min py-2 px-5  ml-2 md:ml-5 lg:ml-7 text-[40px] lg:text-5xl xl:text-6xl xl:ml-0 text-white border-[1px] border-[rgba(255,255,255,.5)] shadow-custom font-medium rounded-xl'>Proyects</h2>
                <div className="w-full absolute h-[1px] top-[50%] bg-[rgba(255,255,255,.5)] ml-10"></div>
            </div>

            <div className="flex justify-center">
            <div className="flex flex-wrap gap-[50px] xl:w-[1300px] justify-center md:w-[800px] ">
                {cardData.map((el, index) => {
                    return (
                        <Card index={index} key={el.id} title={el.title} tech={el.tech} img={el.img} content={el.content} code={el.code}/>
                    )
                })}
            </div>
            </div>

            <div className="mt-28">
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
        </div>
    )
}



export default Proyects


