import axios from 'axios';

const apiService = axios.create({
  baseURL: 'https://dulceconmaria-server.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

const ApiService = {
  async registrarCorreo(email) {
    try {
      const response = await apiService.post('/email', { email });
      if (response.status === 200) {
        console.log('Correo electrónico registrado correctamente');
        return response.data;
      }
    } catch (error) {
      console.error('Error al registrar correo electrónico:', error.message);
      throw new Error('Error al registrar correo electrónico');
    }
  },
};

export default ApiService;
