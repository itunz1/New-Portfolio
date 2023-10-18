import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";


function Card({ title, tech, img, content, code }) {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    function openCode() {
        window.open(code)
    };

    return (
        <div onClick={onOpen} className="w-[350px] overflow-hidden ease-in-out bg-white rounded shadow-lg hover:scale-[1.05] hover:transition delay-3000 cursor-pointer">
            <img className="min-w-[350px] max-h-[215px] border-b-4 border-blue-500" src={img} alt="img not found" />
            <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold">{title}</div>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">{tech}</span>
            </div>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                size="4xl"
                classNames={{
                    
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
                            <img className='border-b-4 border-blue-500 max-h-[550px]' src={img} alt={title} />
                            <ModalBody>
                                <p className='mt-[20px]'>
                                    {content}
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onPress={openCode}>
                                    Code
                                </Button>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
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