import React, { useState, useEffect } from 'react';
import SolicitudDataService from '../services/SolicitudDataService';
import '../css/CrearSolicitudes.css';
import { useNavigate } from 'react-router-dom';


export default function CrearSolicitudes() {

    const [tipoSolicitud, setTipoSolicitud] = useState([]);

    useEffect(() => {
      retrievetipoSolicitud();
    }, []);
  
    const retrievetipoSolicitud = () => {
      SolicitudDataService.getTipoSolicitud()
        .then(response => {
            setTipoSolicitud(response.data);
            console.log(response.data);

        })
        .catch(e => {
          console.log(e);
        });
    };
    let navigate = useNavigate();
    const initialSolicitudState = {
        id: null,
        NombreSolicitante: '',
        ApellidoSolicitante: '',
        CorreoSolicitante:  '',
        TelefonoSolicitante: '',
        NombreEmpresa: '',
        IdTipoSolicitud: 0,
        Descripcion: ''
    };

    const [solicitud, setSolicitud] = useState(initialSolicitudState);

    const handleInputChange = event => {
        const { name, value } = event.target;
           setSolicitud({ ...solicitud, [name]: value });
    };

    const saveSolicitud = () => {
        var data = {
            NombreSolicitante: solicitud.NombreSolicitante,
            ApellidoSolicitante: solicitud.ApellidoSolicitante,
            CorreoSolicitante:  solicitud.CorreoSolicitante,
            TelefonoSolicitante: solicitud.TelefonoSolicitante,
            NombreEmpresa: solicitud.NombreEmpresa,
            IdTipoSolicitud: solicitud.IdTipoSolicitud,
            Descripcion: solicitud.Descripcion
        };

        SolicitudDataService.create(data)
        .then(response => {
            setSolicitud({
                IDSolicitud: response.data.IDSolicitud,
                Radicado: response.data.Radicado,
                NombreSolicitante: response.data.NombreSolicitante,
                ApellidoSolicitante: response.data.ApellidoSolicitante,
                CorreoSolicitante:  response.data.CorreoSolicitante,
                TelefonoSolicitante: response.data.TelefonoSolicitante,
                NombreEmpresa: response.data.NombreEmpresa,
                IdTipoSolicitud: response.data.IdTipoSolicitud,
                Descripcion: response.data.Descripcion
            });
            console.log(response.data);
        }).then(() => {
            navigate('/gestion')
        })
        .catch(e => {
            console.log(e);
        });
    };

    return (
            <div className='form-content'>
                <h2>Formulario de solicitudes</h2>
                <form className='form-detail' id='formSol'>
                            
                    <div className='form'>
                        <div className='form-group'>
                            <div className='form-row form-row-1'>
                                <input type='text' name='NombreSolicitante' id='NombreSolicitante' placeholder='Nombre:' value={solicitud.NombreSolicitante} onChange={handleInputChange} required />
                        </div>
                            <div className='form-row form-row-2'>
                                <input type='text' name='ApellidoSolicitante' id='ApellidoSolicitante' placeholder='Apellido:' value={solicitud.ApellidoSolicitante} onChange={handleInputChange} required />
                            </div>
                        </div>

                        <div className='form-group'>
                            <div className='form-row form-row-1'>
                                <input 
                                    type='text' 
                                    name='CorreoSolicitante' 
                                    id='CorreoSolicitante' 
                                    placeholder='Email:'
                                    pattern=''
                                    value={solicitud.CorreoSolicitante} 
                                    onChange={handleInputChange}
                                    required                                
                                />
                            </div>
                            <div className='form-row form-row-2'>
                                <input type='text' name='TelefonoSolicitante' id='TelefonoSolicitante' placeholder='Telefono:' value={solicitud.TelefonoSolicitante} onChange={handleInputChange} required />
                            </div>
                        </div>

                        <div className='form-group'>
                            <div className='form-row form-row-1'>
                                <input type='text' name='NombreEmpresa' id='NombreEmpresa' placeholder='Empresa:' value={solicitud.NombreEmpresa} onChange={handleInputChange} required />
                            </div>
                            <div className='form-row form-row-2'>
                                <select className='select' id='IdTipoSolicitud' name='IdTipoSolicitud' value={solicitud.IdTipoSolicitud} onChange={handleInputChange} required>
                                    <option selected>-Tipo de solicitud-</option>
                                    { tipoSolicitud.map( tipoSolicitud => (
                                    <option value={tipoSolicitud.IDTipo}>
                                        {tipoSolicitud.TipoSolicitud}
                                    </option>
                                    ))};
                                </select>
                            </div>
                        </div>

                        <div className='form-row'>
                            <input type='text' name='Descripcion' id='Descripcion' placeholder='Detalle su solicitud...' value={solicitud.Descripcion} onChange={handleInputChange} required />
                        </div>

                        <div className='form-row-last'>
                            <input 
                                type='submit' 
                                onClick={saveSolicitud}
                                className='registrar' 
                                value='Registrar' 
                                />
                        </div>
                    </div>
                </form>
        </div>
    );
}
