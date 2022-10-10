import React, {useEffect} from 'react';
import RequestList from '..functions/functions';
import { Table } from 'react-bootstrap'

function ListaSolicitudes() {

  useEffect (()=>{
    RequestList()
  },[])

  return (
    <div className='contenedor-form'>
      <div className='card-body'>
        <div className='encabezado'>
          <h4>Lista de solicitudes</h4>
        </div>
        <Table striped bordered hover variant='dark'>
          <thead>
            <tr>
              <th>Radicado</th>
              <th>Fecha de solicitud</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Correo</th>
              <th>Telefono</th>
              <th>Empresa</th>
              <th>Responsable</th>
              <th>Tipo de solicitud</th>
              <th>Estado de solicitud</th>
              <th>Fecha de respuesta</th>
              <th>Detalle de solicitud</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default ListaSolicitudes