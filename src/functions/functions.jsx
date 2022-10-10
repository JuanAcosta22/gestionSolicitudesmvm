import axios from 'axios';

//Funcion para listar todas las solicitudes
const RequestList = async () => {
    const requests = await axios.get('http://localhost:4000/solicitudes')
    console.log(requests);
    }

    export {
        RequestList
    }