import React, { useEffect, useState } from 'react';
import SolicitudDataService from '../services/SolicitudDataService';
import '../css/ListaSolicitudes.css';
import { Link } from 'react-router-dom';

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

    const setData = (solicitud) => {
      let { IDSolicitud, Radicado, FechaSolicitud, NombreSolicitante, ApellidoSolicitante, CorreoSolicitante, TelefonoSolicitante, NombreEmpresa, IDResponsable, IdTipoSolicitud, IDEstado, FechaRespuesta, Descripcion } = solicitud;
      localStorage.setItem('IDSolicitud', IDSolicitud);
      localStorage.setItem('Radicado', Radicado);
      localStorage.setItem('FechaSolicitud', FechaSolicitud);
      localStorage.setItem('NombreSolicitante', NombreSolicitante);
      localStorage.setItem('ApellidoSolicitante', ApellidoSolicitante);
      localStorage.setItem('CorreoSolicitante', CorreoSolicitante);
      localStorage.setItem('TelefonoSolicitante', TelefonoSolicitante);
      localStorage.setItem('NombreEmpresa', NombreEmpresa);
      localStorage.setItem('IDResponsable', IDResponsable);
      localStorage.setItem('IdTipoSolicitud', IdTipoSolicitud);
      localStorage.setItem('IDEstado', IDEstado);
      localStorage.setItem('FechaRespuesta', FechaRespuesta);
      localStorage.setItem('Descripcion', Descripcion)
  }

  const getData = () => {
      SolicitudDataService.getAll()
          .then((getData) => {
              setSolicitudes(getData.data);
          })
  }

  const onDelete = (id) => {
      SolicitudDataService.remove(id)
      .then(() => {
          getData();
      })
  }

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
                <th scope='col'>Edición</th>
            </tr>
          </thead>
              <tbody>
                <tr className='spacer'><td colSpan='100'></td></tr>
                { solicitudes.map ( solicitud => (
                  <tr key= { solicitud.IDSolicitud }>
                    <td>{ solicitud.Radicado }</td>
                    <td>{ solicitud.FechaSolicitud }</td>
                    <td>{ solicitud.NombreSolicitante }</td>
                    <td>{ solicitud.ApellidoSolicitante }</td>
                    <td>{ solicitud.CorreoSolicitante }</td>
                    <td>{ solicitud.TelefonoSolicitante }</td>
                    <td>{ solicitud.NombreEmpresa }</td>
                    <td>{ (solicitud.IDResponsable === 4) ? 'Fabian':(solicitud.IDResponsable === 5) ? 'Juan':(solicitud.IDResponsable === 6) ? 'Daniel': ''}</td>
                    <td>{ (solicitud.IdTipoSolicitud === 1) ? 'PQR':(solicitud.IdTipoSolicitud === 2) ? 'Novedades':'Desarrollo'}</td>
                    <td>{ (solicitud.IDEstado === 1) ? 'Pendiente':(solicitud.IDEstado === 2) ? 'Resuelto':'Rechazado'}</td>
                    <td>{ solicitud.FechaRespuesta}</td>
                    <td className="celdaAsignado">{ solicitud.Descripcion }</td>
                    <td>
                      <div className="mb-3">
                        <Link to='/update'>
                          <button onClick={() => setData(solicitud)} className="btn btn-dark">Editar</button>
                        </Link>
                      </div>
                      <div className="mb-3">
                        <button onClick={() => onDelete(solicitud.IDSolicitud)} className="btn btn-danger">Borrar</button>
                      </div>
                    </td>
                  </tr>                  
                ))}
              </tbody>
            </table>
        </div>
      </div>
    </div> 
  );
}
