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
      // Si el registro se completa correctamente (código de respuesta 201)
      if (response.status === 201) {
        console.log('Correo electrónico registrado correctamente');
        return response.data;
      }
      // Si el correo electrónico ya está registrado (código de respuesta 400)
      if (response.status === 400) {
        console.log('El correo electrónico ya está registrado');
        throw new Error('El correo electrónico ya está registrado');
      }
      // Si ocurre un error interno del servidor (código de respuesta 500)
      if (response.status === 500) {
        console.error('Error interno del servidor:', response.data.message);
        throw new Error('Error interno del servidor: ' + response.data.message);
      }
    } catch (error) {
      // Si no se puede conectar con la API
      console.error('Error al conectar con la API:', error.message);
      throw new Error('Error al registrar correo electrónico: no se pudo conectar con la API');
    }
  },
};

export default ApiService;
