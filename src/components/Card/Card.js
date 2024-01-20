import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { FormattedMessage } from 'react-intl';


function Card({ title, tech, img, content, contentEsp, code, site }) {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    function openCode() {
        window.open(code)
    };

    function openSite() {
        window.open(site)
    };

    return (
        <div onClick={onOpen} className="w-full sm:w-[350px] overflow-hidden ease-in-out bg-white rounded shadow-lg hover:scale-[1.05] hover:transition delay-3000 cursor-pointer">
            <img className="w-full h-[100px] sm:h-[250px] border-b-4 border-blue-500 " src={img} alt="img not found" />
            <div className="sm:px-6 sm:py-4">
                <div className="hidden mb-2 text-xl font-bold sm:inline">{title}</div>
            </div>
            <div className="px-2 pt-4 sm:px-6 sm:pb-2">
                <span className="inline-block px-3 mb-2 mr-2 font-semibold text-[12px] text-gray-700 bg-gray-200 rounded-full sm:text-sm sm:py-1">{tech}</span>
            </div>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                size="xl"
                scrollBehavior='inside'
                placement='center'
                className="w-[85%] sm:w-full"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
                            <img className='w-full border-b-4 border-blue-500' src={img} alt={title} />
                            <ModalBody>
                                <p className='mt-[20px]'>
                                    <FormattedMessage id="projects.content" defaultMessage="n/a" values={{ content: content, contentEsp: contentEsp }} />
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                {site? <Button color="primary" onPress={openSite}>
                                    Website
                                </Button> : "" }
                                
                                <Button color="primary" onPress={openCode}>
                                    <FormattedMessage id="projects.code" defaultMessage="Code" />
                                </Button>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    <FormattedMessage id="projects.close" defaultMessage="Close" />
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}

export default Card