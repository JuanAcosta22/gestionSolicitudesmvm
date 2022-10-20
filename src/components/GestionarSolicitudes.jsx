import React, { useEffect, useState } from 'react';
import SolicitudDataService from '../services/SolicitudDataService';
import '../css/ListaSolicitudes.css';

export default function GestionarSolicitudes() {

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

  return (
    <div className='content'>    
    <div className='container'>
      <h2 className='text-center'>Lista de solicitudes</h2>
      <div className='table-responsive custom-table-responsive'>
        <table className='table custom-table'>
          <thead>            
            <tr>              
                <th scope='col'>Radicado</th>
                <th scope='col'>Fecha solicitud</th>
                <th scope='col'>Nombre</th>
                <th scope='col'>Apellido</th>
                <th scope='col'>Correo</th>
                <th scope='col'>Telefono</th>
                <th scope='col'>Empresa</th>
                <th scope='col'>Responsable</th>
                <th scope='col'>Tipo Solicitud</th>
                <th scope='col'>Estado Solicitud</th>
                <th scope='col'>Fecha Respuesta</th>
                <th scope='col'>Detalle Solicitud</th>
            </tr>
          </thead>
              <tbody>
                <tr className='spacer'><td colspan='100'></td></tr>
                { solicitudes.map ( solicitud => (
                  <tr key= { solicitud.IDSolicitud }>
                    <td><a href='/editar'>{ solicitud.Radicado }</a></td>
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
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
      </div>
    </div> 
  );
}
