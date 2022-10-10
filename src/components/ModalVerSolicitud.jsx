import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

function ModalVerSolicitud() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Title>Modal heading</Modal.Title>
        <Modal.Body>
        <Form className='d-flex'>
            <Form.Control
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search' />
            <Button variant='outline-success' onClick={handleClose}>
                Buscar
            </Button>
            <br />
            <span>
                *Ingrese el número de radicado para consultar el estado de su solicitud
            </span>            
        </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalVerSolicitud