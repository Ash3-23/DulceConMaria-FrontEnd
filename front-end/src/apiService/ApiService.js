import axios from 'axios';

const apiService = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json',
  },
});

const ApiService = {
  async registrarCorreo(email) {
    try {
      const response = await apiService.post('/email', { email });
      console.log(response.data, 'Api - response.data');
      return response.data; // Devuelve directamente los datos de la respuesta del servidor
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log('Api - El correo electrónico ya está registrado');
      } else {
        console.error('Api - Error:', error.message);
      }
    }
  },
  async obtenerRecetas() {
    try {
      const response = await apiService.get('/recipes');
      return response.data;
    } catch (error) {
      console.error('Api - Error al obtener recetas:', error.message);
      throw error;
    }
  },
};

export default ApiService;