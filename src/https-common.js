import axios from 'axios';

export default axios.create({
  //  baseURL: 'https://apigestionsolicitudes.azurewebsites.net',
    baseURL: 'http://localhost:4000',
    headers: {
      'Content-Type': 'application/json'
    }
  });