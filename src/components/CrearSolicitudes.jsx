import React, { useState, useEffect } from 'react';
import SolicitudDataService from '../services/SolicitudDataService';
import '../css/CrearSolicitudes.css';


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
    const [submitted, setSubmitted] = useState(false);

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
            setSubmitted(true);
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    };

    const newSolicitud = () => {
        setSolicitud(initialSolicitudState);
        setSubmitted(false);
    };

    return (
        <div className='page-content'>

            {submitted ? (
                <div className='alert'>
                    <h4>...¡Solicitud registrada!...</h4>
                    <input type='submit' onClick={newSolicitud} className='aceptar' value='Aceptar' />
                </div>) : (

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
                                    type='email' 
                                    name='CorreoSolicitante' 
                                    id='CorreoSolicitante' 
                                    placeholder='Email:' 
                                    pattern='/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/'
                                    required 
                                    value={solicitud.CorreoSolicitante} 
                                    onChange={handleInputChange}                                    
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
                )}
        </div>
    );
}
