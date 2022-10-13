import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../css/Navegacion.css'

const Navegacion = () => {
    return (
      <>
        <Navbar className='barra-navegacion' variant='dark'>
          <Container>
            <Navbar.Brand href="https://www.mvm.com.co">
              <img src='https://www.mvm.com.co/wp-content/uploads/2022/09/logo-ingles.png' className='header_logo' alt='mvm_Logo' />
            </Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link className='crear-solicitudes' href='/'>Crear solicitudes</Nav.Link>
              <Nav.Link className='ver-solicitudes' href='/listar'>Ver tus solicitudes</Nav.Link>
              <Nav.Link className='login' href='/editar'><input type='submit' value='Iniciar Sesión' className='button' /></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
}

export default Navegacion;
