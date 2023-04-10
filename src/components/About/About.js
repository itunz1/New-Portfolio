import React, { useEffect } from 'react'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer"

export default function About() {
    const text = `Hi, I'm Jose, a passionate frontend developer with over 1 years of experience in building web applications. 
    My focus is on creating user-friendly and visually stunning websites that provide an exceptional user experience. 
    One of my key strengths is my ability to collaborate with designers, backend developers, and project managers to bring
    projects to life. I understand the importance of communication and teamwork, and I'm always looking for ways to improve processes and streamline workflows.
    My writing style is versatile and adaptable to the needs of the project at hand. Whether it's creating engaging blog posts,
    informative articles, or compelling product descriptions, I approach each assignment with creativity and a commitment to excellence. 
    I'm dedicated to staying up to date with the latest trends and technologies in the industry, and I enjoy sharing my knowledge
    with others and frequently attend meetups and conferences to stay informed and connected.
    If you're interested in working with me or learning more about my experience and skills, please don't hesitate to get in touch.
    I'm always open to new opportunities.` 

    const ctrls = useAnimation();

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            ctrls.start("visible");
        }
        if (!inView) {
            ctrls.start("hidden");
        }
    }, [ctrls, inView]);

    const wordAnimation = {
        hidden: {},
        visible: {},
    };

    const characterAnimation = {
        hidden: {
            opacity: 0,
            y: `0.25em`,
        },
        visible: {
            opacity: 1,
            y: `0em`,
            transition: {
                duration: 0.01,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        },
    };

    return (
        <div className='px-5 h-fit lg:px-20 sm:px-10'>
            <h2 className='mb-10 text-4xl font-semibold text-center text-white sm:text-5xl lg:text-5xl xl:text-6xl'>About Me</h2>
            {text.split(" ").map((word, index) => {
                return (
                    <motion.span
                        className='mr-[0.5em] inline-block'
                        ref={ref}
                        aria-hidden="true"
                        key={index}
                        initial="hidden"
                        animate={ctrls}
                        variants={wordAnimation}
                        transition={{
                            delayChildren: index * 0.03,
                            staggerChildren: 0.05,
                        }}
                    >
                        {word.split("").map((character, index) => {
                            return (
                                <motion.span
                                    aria-hidden="true"
                                    key={index}
                                    variants={characterAnimation}
                                    className={`text-[#858792] text-sm sm:text-base xl:text-lg inline-block`}
                                >
                                    {character}
                                </motion.span>
                            );
                        })}
                    </motion.span>
                );
            })}
        </div>
    )
}
