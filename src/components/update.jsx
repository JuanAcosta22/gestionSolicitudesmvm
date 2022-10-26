import React, { useState,   useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SolicitudDataService from '../services/SolicitudDataService';
import '../css/CrearSolicitudes.css'

export default function Update() {
    
    const [nombreResponsable, setResponsable] = useState([]);
    const [nombre, setNombre] = useState([]);
  
    const retrievenombreResponsable = () => {
      SolicitudDataService.getResponsable()
        .then(response => {
            setResponsable(response.data);
            console.log(response.data);

        })
        .catch(e => {
          console.log(e);
        });
    };

    const retrievenombre = () => {
        SolicitudDataService.getNombre()
          .then(response => {
            setNombre(response.data);
              console.log(response.data);
  
          })
          .catch(e => {
            console.log(e);
          });
      };

    let navigate = useNavigate();
    const [IDSolicitud, setIDSolicitud] = useState(0);
    const [NombreSolicitante, setNombreSolicitante] = useState('');
    const [ApellidoSolicitante, setApellidoSolicitante] = useState('');
    const [TelefonoSolicitante, setTelefonoSolicitante] = useState('');
    const [IDEstado, setIDEstado] = useState(0);
    const [IDResponsable, setIDResponsable] = useState(0);
    const [FechaRespuesta, setFechaRespuesta] = useState(null);
    const [CorreoSolicitante, setCorreoSolicitante] = useState('');
    const [NombreEmpresa, setNombreEmpresa] = useState('');
    const [Descripcion, setDescripcion] = useState('');

    useEffect(() => {
        setIDSolicitud(localStorage.getItem('IDSolicitud'));
        setNombreSolicitante(localStorage.getItem('NombreSolicitante'));
        setApellidoSolicitante(localStorage.getItem('ApellidoSolicitante'));
        setTelefonoSolicitante(localStorage.getItem('TelefonoSolicitante'));
        setIDEstado(localStorage.getItem('IDEstado'));
        setIDResponsable(localStorage.getItem('IDResponsable'));
        setFechaRespuesta(localStorage.getItem('FechaRespuesta'));
        setCorreoSolicitante(localStorage.getItem('CorreoSolicitante'));
        setNombreEmpresa(localStorage.getItem('NombreEmpresa'));
        setDescripcion(localStorage.getItem('Descripcion'));
        retrievenombreResponsable();
        retrievenombre();
    }, []);

    const updateSolicitud = () => { 
        SolicitudDataService.update(IDSolicitud, {
            IDSolicitud,
            NombreSolicitante,
            ApellidoSolicitante,
            TelefonoSolicitante,
            CorreoSolicitante,
            NombreEmpresa,
            IDEstado,
            IDResponsable,
            FechaRespuesta,
            Descripcion
        }).then(() => {
            navigate('/gestion')
        })
    }
        return (

            <div className='form-content'>
                <h2>Formulario de solicitudes</h2>
                <form className='form-detail' id='formSol'>
                            
                    <div className='form'>
                        <div className='form-group'>
                            <div className='form-row form-row-1'>
                                <input type='text' name='NombreSolicitante' id='NombreSolicitante' placeholder='Nombre:' value={NombreSolicitante} onChange={(e) => setNombreSolicitante(e.target.value)} required />
                            </div>
                            <div className='form-row form-row-2'>
                                <input type='text' name='ApellidoSolicitante' id='ApellidoSolicitante' placeholder='Apellido:' value={ApellidoSolicitante} onChange={(e) => setApellidoSolicitante(e.target.value)} required />
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
                                    value={CorreoSolicitante} onChange={(e) => setCorreoSolicitante(e.target.value)} required />
                            </div>
                            <div className='form-row form-row-2'>
                                <input type='text' name='TelefonoSolicitante' id='TelefonoSolicitante' placeholder='Telefono:' value={TelefonoSolicitante} onChange={(e) => setTelefonoSolicitante(e.target.value)} required />
                            </div>
                        </div>

                        <div className='form-group'>
                            <div className='form-row form-row-1'>
                                <input type='text' name='NombreEmpresa' id='NombreEmpresa' placeholder='Empresa:' value={NombreEmpresa} onChange={(e) => setNombreEmpresa(e.target.value)} required />
                            </div>
                        <div className='form-row form-row-2'>
                            <select className='select' id='IDResponsable' name='IDResponsable' value={IDResponsable} onChange={(e) => setIDResponsable(e.target.value)} required>
                                <option selected>-Responsable-</option>
                                    { nombreResponsable.map( nombreResponsable => (
                                <option value={nombreResponsable.IDResponsable}>
                                    {nombreResponsable.NombreResponsable}
                                </option>
                                    ))};
                            </select>
                        </div>
                        </div>
                        <div className='form-group'>
                            <div className='form-row form-row-1'>
                            <select className='select' id='IDEstado' name='IDEstado' value={IDEstado} onChange={(e) => setIDEstado(e.target.value)} required>
                                <option selected>-Estado de solicitud-</option>
                                    { nombre.map( nombre => (
                                <option value={nombre.IDEstado}>
                                    {nombre.Nombre}
                                </option>
                                    ))};
                            </select>
                            </div>
                            <div className='form-row form-row-2'>
                                <input type='date' name='FechaRespuesta' id='FechaRespuesta' value={FechaRespuesta} onChange={(e) => setFechaRespuesta(e.target.value)} />
                            </div>
                        </div>

                        <div className='form-row'>
                            <input type='text' name='Descripcion' id='Descripcion' placeholder='Detalle su solicitud...' value={Descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
                        </div>

                        <div className='form-row-last'>
                            <input 
                                type='submit' 
                                onClick={updateSolicitud}
                                className='registrar' 
                                value='Actualizar' 
                                />
                        </div>
                    </div>
                </form>
            </div>
        
    );
}