import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ExtraProjects.scss'
import { extras } from '../../data/data';
import { Button } from '@nextui-org/react';
import { FormattedMessage } from 'react-intl';

const wrapperVariants = {
    initial: {
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
        transition: { duration: .4 }
    },
    animate: {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        transition: { duration: .4, staggerChildren: .1 }
    },
    exit: {
        clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
        transition: { duration: .4 }
    }
}
const squareVariants = {
    initial: {
        opacity: 0,
        scale: .3,
    },
    animate: {
        opacity: 1,
        scale: 1,
    }
}



function ExtraProjects() {

    const [selectedSquare, setSelectedSquare] = useState(null);

    function openCode() {
        window.open(selectedSquare.code)
    };

    function openSite() {
        window.open(selectedSquare.site)
    };

    const renderSquares = () => {
        return extras.map((item) => (
            <motion.div
                key={item.id}
                className={`square square--${item.id}`}
                onClick={() => setSelectedSquare(item)}
                variants={squareVariants}
                transition={{ duration: .2, type: 'spring' }}
            />
        ));
    }

    return (
        <div className='cp-transition__component-wrapper'>
            <div className={`cp-transition cp-transition__container cp-transition__container--${selectedSquare?.id}`}>
                <AnimatePresence initial={false}>
                    {selectedSquare
                        ? (
                            <motion.div
                                className={`card card__wrapper card__wrapper--${selectedSquare?.id}`}
                                key="card"
                                variants={wrapperVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                            >
                                <div className="flex justify-end mr-5 card">
                                    <button className='font-extrabold' onClick={() => setSelectedSquare(null)}>
                                        X
                                    </button>
                                </div>
                                <div className="card__content">
                                    <div className='md:w-[75%] flex justify-center'>
                                        <img className='w-[250px] h-[200px] md:w-[100%] md:h-[90%] rounded-lg' src={selectedSquare?.img} alt='App Icon' />
                                    </div>
                                    <div>
                                        <h2 className='mb-5 text-4xl font-bold md:text-5xl'>{selectedSquare?.title}</h2>
                                        <p className="mb-2 card__text-placeholder">
                                            <FormattedMessage id='extras.description' defaultMessage="N/A" values={{ description: selectedSquare?.description, descriptionEsp: selectedSquare?.descriptionEsp}}/>
                                        </p>
                                        <p>{selectedSquare?.tech}</p>
                                        <div className='flex justify-center mt-5 gap-7'>
                                            <Button className='hover:bg-white' onPress={openCode}>Code</Button>
                                            <Button className='hover:bg-white' onPress={openSite}>Site</Button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                        : (
                            <motion.div
                                className=" cp-transition__squares-wrapper"
                                key="squares"
                                variants={wrapperVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                            >
                                {renderSquares()}
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </div>
        </div>
    )
}

export default ExtraProjects