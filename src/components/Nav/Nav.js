import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'
import { FaRegUser, FaChalkboard, FaAddressBook, FaCode } from 'react-icons/fa';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { Link } from "react-scroll";
import { FormattedMessage } from 'react-intl';



function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Nav() {
    const scrollPosition = useScrollPosition();

    return (
        <Popover
            className={classNames(
                scrollPosition > 0 ? 'shadow' : 'shadow-none',
                'transition-shadow sticky top-0 bg-[#252734] z-20'
            )}
        >
            <div className='px-4 mx-auto max-w-7xl sm:px-6'>
                <div className='flex items-center justify-between py-6 sm:px-10 md:space-x-10'>
                    <div className='flex justify-start lg:w-0 lg:flex-1'>
                        <Link to="home"
                            className='border-white border-solid '
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={800}>
                            <span className='text-[#fff59d] shadow-[rgb(255 245 157)_0px_0px_10px] font-bold text-2xl cursor-pointer border-white border-solid'>JL</span>
                        </Link>

                    </div>
                    <div className='-my-2 -mr-2 md:hidden'>
                        <Popover.Button className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                            <span className='sr-only text-blue'>Open menu</span>
                            <RxHamburgerMenu className='w-6 h-6' aria-hidden='true' />
                        </Popover.Button>
                    </div>

                    <Popover.Group as='nav' className='hidden space-x-10 md:flex'>
                        <Link to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={800}>
                            <span className='inline-flex items-center gap-1 text-lg font-medium text-white hover:text-[#fff59d]'>< FaRegUser className='text-sm' />
                                <FormattedMessage id="menu.about" defaultMessage="About" />
                            </span>
                        </Link>

                        <Link to="skills"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={800}>
                            <span className='inline-flex items-center gap-1 text-lg font-medium text-white cursor-pointer hover:text-[#fff59d]'><FaCode className='text-base' />
                                <FormattedMessage id="menu.skills" defaultMessage="Skills" />
                            </span>
                        </Link>

                        <Link to="projects"
                            spy={true}
                            smooth={true}
                            offset={-20}
                            duration={800}>
                            <span className='inline-flex items-center gap-1 text-lg font-medium text-white cursor-pointer hover:text-[#fff59d]'><FaChalkboard className='text-base' />
                                <FormattedMessage id="menu.projects" defaultMessage="Proyects" />
                            </span>
                        </Link>

                        <Link to="contact"
                            spy={true}
                            smooth={true}
                            offset={-20}
                            duration={800}>
                            <span className='inline-flex items-center gap-1 text-lg font-medium text-white cursor-pointer hover:text-[#fff59d]'> <FaAddressBook className='text-sm' />
                                <FormattedMessage id="menu.contact" defaultMessage="Contact" />
                            </span>
                        </Link>
                    </Popover.Group>

                </div>
            </div>

            <Transition
                as={Fragment}
                enter='duration-200 ease-out'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='duration-100 ease-in'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
            >
                <Popover.Panel focus className='absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden'>
                    <div className='bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50'>
                        <div className='px-5 pt-5 pb-6'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <span className='text-blue-500 shadow-[rgb(255 245 157)_0px_0px_10px] font-bold text-2xl cursor-pointer ml-5'>JL</span>
                                </div>
                                <div className='-mr-2'>
                                    <Popover.Button className='inline-flex items-center justify-center p-2 mr-8 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                                        <span className='sr-only'>Close menu</span>
                                        <AiOutlineClose className='w-6 h-6' aria-hidden='true' />
                                    </Popover.Button>
                                </div>
                            </div>
                        </div>


                        <div className='px-5 py-6 space-y-6'>
                            <div className='flex flex-col items-center justify-center gap-8'>
                                <Link to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                >
                                    <Popover.Button>
                                        <span className='inline-flex items-center gap-1 text-lg font-medium text-black cursor-pointer hover:text-blue-400'>< FaRegUser className='text-sm' />
                                            <FormattedMessage id="menu.about" defaultMessage="About" />
                                        </span>
                                    </Popover.Button>
                                </Link>

                                <Link to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}>
                                    <Popover.Button>
                                        <span className='inline-flex items-center gap-1 text-lg font-medium text-black cursor-pointer hover:text-blue-400'><FaCode className='text-base' />
                                            <FormattedMessage id="menu.skills" defaultMessage="Skills" />
                                        </span>
                                    </Popover.Button>
                                </Link>

                                <Link to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-20}
                                    duration={800}>
                                    <Popover.Button>
                                        <span className='inline-flex items-center gap-1 text-lg font-medium text-black cursor-pointer hover:text-blue-400'><FaChalkboard className='text-base' />
                                            <FormattedMessage id="menu.proyects" defaultMessage="Proyects" />
                                        </span>
                                    </Popover.Button>
                                </Link>

                                <Link to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-20}
                                    duration={800}>
                                    <Popover.Button>
                                        <span className='inline-flex items-center gap-1 text-lg font-medium text-black cursor-pointer hover:text-blue-400'> <FaAddressBook className='text-sm' />
                                            <FormattedMessage id="menu.contact" defaultMessage="Contact" />
                                        </span>
                                    </Popover.Button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
};