import React, { useState } from 'react'
import { Modal, Image } from "react-bootstrap";

function ProjectModal(props) {
    const [modal, setModal] = useState(false);
    const handleModalClick = () => {
        console.log("click");
        setModal(!modal);
      };

  return (
    <Modal show={modal} onHide={handleModalClick}>
        <Image src={props.img} alt={props.title} />
        <Modal.Header>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-3">
            <h2>Instructions</h2>
            <p>{props.content}</p>
            <h2>Ingredients</h2>
          </div>
        </Modal.Body>
      </Modal>
  )
}

export default ProjectModal