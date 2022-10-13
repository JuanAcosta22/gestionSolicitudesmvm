import React from 'react';
import { Form, Row, Col, FloatingLabel } from 'react-bootstrap';
import '../css/CrearSolicitudes.css';

export default function CrearSolicitudes() {

    return (

        <div className='contenedor-form'>
            <div className='card-body'>
            <div className='encabezado'>
                <h4>Ingresar solicitud</h4>
            </div>
                <Form className='formulario'>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId='nombre'>
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control className='box' type='text' placeholder='Ingrese su nombre' />
                        </Form.Group>
                            
                        <Form.Group as={Col} controlId='apellido'>
                            <Form.Label>Apellido:</Form.Label>
                            <Form.Control type='text' placeholder='Ingrese su apellido' />
                            </Form.Group>
                    </Row>

                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId='email'>
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type='email' placeholder='Enter email' />
                        </Form.Group>
                            
                        <Form.Group as={Col} controlId='telefono'>
                            <Form.Label>Telefono:</Form.Label>
                            <Form.Control type='telephone' placeholder='Ingrese su teléfono' />
                        </Form.Group>
                    </Row>
                            
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId='empresa'>
                            <Form.Label>Empresa:</Form.Label>
                            <Form.Control type='text' placeholder='Ingrese nombre de empresa' />
                        </Form.Group>
                            
                        <Form.Group as={Col} controlId='tipoSolicitud'>
                            <Form.Label>Tipo de solicitud:</Form.Label>
                            <Form.Select>
                                <option>-Elija una opción-</option>
                                <option>PQRS</option>
                                <option>Novedades</option>
                                <option>Desarrollos</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Form.Group className='mb-3' controlId='comentarios'>
                        <FloatingLabel controlId='floatingTextarea2' label='Comentarios'>
                            <Form.Control
                                as='textarea'
                                placeholder='Deje aquí sus comentario'
                                style={{ height: '100px' }} />
                        </FloatingLabel>
                    </Form.Group>
                </Form>
                <center>
    	            <input type='submit' value='Enviar' className='button' />       
                </center>
            </div>
        </div>
    );
}
