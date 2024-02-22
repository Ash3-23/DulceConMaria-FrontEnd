// apiService.js

import axios from 'axios';

const apiService = axios.create({
  baseURL: 'https://dulceconmaria-server.onrender.com', // Reemplaza con la URL de tu servidor backend
  headers: {
    'Content-Type': 'application/json',
  },
});

const ApiService = {
  async registrarCorreo(email) {
    try {
      const response = await apiService.post('/email', { email });
      console.log(response.data, 'respuesta del server');
      return response.data;
    } catch (error) {
      console.log(error, 'este es el error')
      throw new Error(`Error al registrar correo electrónico: ${error.message}`);
    }
  },
};

export default ApiService;
