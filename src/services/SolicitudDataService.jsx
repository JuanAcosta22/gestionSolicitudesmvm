import http from '../http-common';

class SolicitudDataService {
    getAll() {
        return http.get('/api/solicitudes');
    }
  
    get(id) {
        return http.get(`/api/solicitudes/${id}`);
    }
  
    create(data) {
        return http.post('/api/solicitudes', data);
    }
  
    update(id, data) {
    return http.put(`/api/solicitudes/${id}`, data);
    }

    getTipoSolicitud() {
        return http.get('/api/tipoSolicitud')
    }

}

export default new SolicitudDataService();
