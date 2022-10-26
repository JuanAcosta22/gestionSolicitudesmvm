import http from '../https-common';

class SolicitudDataService {
    getAll() {
        return http.get('/solicitudes');
    }
  
    get(id) {
        return http.get(`/solicitud/${id}`);
    }
  
    create(data) {
        return http.post('/solicitud', data);
    }
  
    update(id, data) {
    return http.put(`/solicitud/${id}`, data);
    }

    getTipoSolicitud() {
        return http.get('/tipoSolicitud');
    }

    getResponsable() {
        return http.get('/responsable');
    }

    getNombre() {
        return http.get('/nombre');
    }

    remove(id) {
        return http.delete(`/solicitud/${id}`);
    }

}

export default new SolicitudDataService();
