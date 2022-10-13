import http from '../http-common';

const getAll = () => {
    return http.get("/solicitudes");
    };
  
const get = id => {
    return http.get(`/solicitud/${id}`);
    };
  
const create = data => {
    return http.post("/solicitudes", data);
    };
  
const update = (id, data) => {
    return http.put(`/solicitudes/${id}`, data);
    };

const remove = id => {
    return http.delete(`/tutorials/${id}`);
    };

const SolicitudDataService = {
    getAll,
    get,
    create,
    update,
    remove
};

export default SolicitudDataService;
