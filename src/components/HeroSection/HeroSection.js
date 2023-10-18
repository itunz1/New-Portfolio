import { BiDownload } from 'react-icons/bi';
import { CiFacebook } from 'react-icons/ci';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import resumen from '../../images/CVResumeEn.pdf'
import Typewriter from 'typewriter-effect';



export function HeroSection() {



    function openGithub() {
        window.open('https://github.com/itunz1')
    };

    function openLinkedin() {
        window.open('https://www.linkedin.com/in/jose-lezama/')
    };

    const resume = () => {
        window.open(resumen)
    }


    return (
        <div className='flex justify-center'>
            <div className='z-3 max-w-[1200px] flex flex-col justify-center items-center px-[8px] py-[24px] mt-[230px]'>
                <Typewriter
                    options={{
                        wrapperClassName:"text-[#fff59d] text-[88px] Typewriter__wrapper drop-shadow-[0_0_5px] font-cormorant font-bold",
                        cursorClassName:"text-white Typewriter__cursor text-[78px]",
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString('Jose Lezama')
                            .start();
                    }}
                />
                <div className='flex flex-row justify-center items-center p-[30px]'>
                    <p className='mt-[10px] text-white text-[100px] text-center max-w-[600px] p-[70px] cursor-pointer hover:text-[#fff59d] hover:scale-125 hover:transition ease-in-out delay-2000'>
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

{/* <div className='text-white absolute ml-5 top-[28rem] sm:top-[38rem] md:top-auto md:bottom-[-900px] md:ml-32 lg:ml-24 lg:bottom-auto lg:w-[400px] lg:relative xl:w-full xl:ml-32 w-fit xl:mt-16 2xl:ml-14 2xl:mt-32 '>
                <h3 className='mb-1 text-4xl font-bold tracking-tight sm:text-4xl lg:mt-28 lg:text-5xl xl:text-7xl xl:mt-0 2xl:mt-16 2xl:text-8xl'>Hello! I’m</h3>
                <h2 className='font-bold tracking-normal text-6xl lg:text-[80px] xl:tracking-tight xl:text-[7.5rem] 2xl:text-[9rem] 2xl:mt-[-20px] '>Jose Lezama</h2>
                <p className='mt-8 mb-8 md:mb-8 lg:mb-12 text-base text-[#858792] lg:text-lg xl:text-xl 2xl:text-2xl'>Full Stack Web Developer</p>
                <a className=' border-[1px] border-[#3b3d49] hover:bg-[#85879215] p-4 text-sm w-fit inline-block rounded-full transition duration-500 ease-in-out hover:-translate-y-1 md:text-base md:px-10 md:py-4 xl:text-lg xl:px-12 xl:py-7' onClick={resume} href='/'>Get Resume <BiDownload className='inline-block h-5 text-2xl font-bold' /></a>
            </div>

            <div className='hidden'>
                <span className='w-[440px] h-[440px] absolute border-[rgba(255,255,255,.2)] border-[1px] rounded-full block top-[-30%] left-[-15%] opacity-100'></span>
                <span className='w-[560px] h-[560px] absolute border-[rgba(255,255,255,.3)] border-[1px] rounded-full block top-[-35%] left-[-19%] opacity-100'></span>
                <span className='w-[700px] h-[700px] absolute border-[rgba(255,255,255,.4)] border-[1px] rounded-full block top-[-40%] left-[-23%] opacity-100'></span>
            </div>

            <div className='hidden'>
                <span className='w-[440px] h-[440px] absolute border-[rgba(255,255,255,.2)] border-[1px] rounded-full block top-[85%] left-[-14%] opacity-100'></span>
                <span className='w-[560px] h-[560px] absolute border-[rgba(255,255,255,.3)] border-[1px] rounded-full block top-[80%] left-[-16%] opacity-100'></span>
                <span className='w-[700px] h-[700px] absolute border-[rgba(255,255,255,.4)] border-[1px] rounded-full block top-[74%] left-[-20%] opacity-100'></span>
            </div>

            <div className='absolute w-[180px] top-[3rem] left-[23%] sm:w-[315px] sm:left-[25%] sm:top-3 md:top-[36px] md:left-[auto] md:right-[35%] md:mt-1 lg:mt-auto lg:top-[2%] lg:right-[25%] lg:w-[315px] xl:top-[8%] xl:w-auto xl:right-[15%] 2xl:right-[10%] 2xl:top-[1%] 2xl:left-auto 2xl:bottom-0'>
                <div>
                    <img className='relative z-10 mr-10 pt-28absolute' src={jose} alt='jose img'/>
                    <div>
                        <div className='border-[rgba(255,255,255,.2)] border-[2px] border-l-0 absolute rounded-r-[150px] w-[150px] h-[250px] top-[15%] left-[45%] sm:rounded-r-[200px] sm:w-[260px] sm:h-[400px] md:top-[14%] md:left-[40%] lg:rounded-r-[250px] lg:w-[260px] lg:h-[464px] lg:left-[51%] lg:bottom-[4%] xl:rounded-r-[350px] xl:w-[350px] xl:h-[600px] xl:left-[55%]  xl:bottom-[10%]'></div>
                    </div>
                    <div>
                        <a className='text-white text-[14px] bg-[#262626] absolute top-[15%] left-[85%] p-3 md:top-[16%] md:left-[87%] lg:text-xl lg:top-[20%] lg:left-[100%] xl:left-[500px] xl:top-[190px] 2xl:left-[490px] 2xl:top-[180px] sm:text-lg sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 border-2 border-[rgba(255,255,255,.5)] rounded-full sm:p-[13px] lg:p-[17px] xl:p-[20px] hover:bg-white hover:text-black z-10' href='https://www.linkedin.com/in/jose-lezama/' target='_blank' rel="noreferrer"><BsLinkedin/></a>
                        <a className='text-white text-[15px] bg-[#262626] absolute top-[30%] left-[109%] p-3 sm:top-[26%] md:top-[30%] md:left-[108%] lg:top-[38%] lg:text-2xl lg:left-[121%] xl:left-[575px] xl:top-[23rem] 2xl:left-[575px] 2xl:top-[23rem] sm:text-xl sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 border-2 border-[rgba(255,255,255,.5)] rounded-full md:p-[12px] lg:p-[15px] xl:p-[18px] hover:bg-white hover:text-black' href='https://github.com/itunz1' target='_blank' rel="noreferrer"><FiGithub /></a>
                        <a className='text-white text-[23px] bg-[#262626] absolute top-[50%] left-[115%] p-2 sm:top-[42%] sm:left-[119%] md:top-[48%] md:left-[114%] lg:top-[60%] lg:text-2xl lg:left-[121%] xl:left-[510px] xl:top-[570px]  2xl:left-[510px] 2xl:top-[575px] sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 border-2 border-[rgba(255,255,255,.5)] rounded-full sm:p-[10px] lg:p-[11px] xl:p-[18px] hover:bg-white hover:text-black' href='https://www.facebook.com/jose.lezama.562/' target='_blank' rel="noreferrer"><CiFacebook className='sm:text-2xl lg:text-3xl xl:top-[25%] xl:left-[25%] xl:absolute' /></a>
                    </div>
                </div>
            </div> */}