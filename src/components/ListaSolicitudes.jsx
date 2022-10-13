import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import '../css/ListaSolicitudes.css';
import SolicitudDataService from '../services/SolicitudDataService';


export default function ListaSolicitudes() {

  const [solicitudes, setSolicitudes] = useState([]);

  useEffect(() => {
    retrieveSolicitudes();
  }, []);

  const retrieveSolicitudes = () => {
    SolicitudDataService.getAll()
      .then(response => {
        setSolicitudes(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return(
    <div className='contenedor-form'>
      <div className='card-body'>
        <div className='encabezado'>
          <h4>Lista de solicitudes</h4>
        </div>
        <Table className='table table-sm' bordered hover>
          <thead className='t-encabezado'>
            <tr>
              <th>Radicado</th>
              <th>Fecha solicitud</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Correo</th>
              <th>Telefono</th>
              <th>Empresa</th>
              <th>Responsable</th>
              <th>Tipo Solicitud</th>
              <th>Estado Solicitud</th>
              <th>Fecha Respuesta</th>
              <th>Detalle Solicitud</th>
            </tr>
          </thead>
          <tbody className='t-cuerpo'>
            { solicitudes.map ( solicitud => (
              <tr key= { solicitud.IDSolicitud }>
                <td>{ solicitud.Radicado }</td>
                <td>{ solicitud.FechaSolicitud }</td>
                <td>{ solicitud.NombreSolicitante }</td>
                <td>{ solicitud.ApellidoSolicitante }</td>
                <td>{ solicitud.CorreoSolicitante }</td>
                <td>{ solicitud.TelefonoSolicitante }</td>
                <td>{ solicitud.NombreEmpresa }</td>
                <td>{ solicitud.IDResponsable }</td>
                <td>{ solicitud.IdTipoSolicitud }</td>
                <td>{ solicitud.IDEstado }</td>
                <td>{ solicitud.FechaRespuesta }</td>
                <td>{ solicitud.Descripcion }</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
