import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../css/Navegacion.css'

const Navegacion = () => {
    return (
      <>
        <Navbar className='barra-navegacion' variant='dark'>
          <Container>
            <Navbar.Brand href='https://www.mvm.com.co'>
              <img src='../img/mvm-footer.png' class='header_logo' alt='mvm_Logo' />
            </Navbar.Brand>
            <Nav className='ml-auto'>
              <Nav.Link className='crear-solicitudes' href='/'>Crear solicitudes</Nav.Link>
              <Nav.Link className='ver-solicitudes' href='/modal'>Ver tus solicitudes</Nav.Link>
              <Nav.Link className='login' href='/editar'><input type='submit' value='Iniciar Sesión' className='button' /></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
}

export default Navegacion;
