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
      console.log(response, 'Api - response.data')
      return response.data; // Devuelve directamente los datos de la respuesta del servidor

    } catch (error) {
      if (error.response) {
        // El servidor respondió con un código de estado fuera del rango 2xx
        const { status, data } = error.response;
        console.log(error.response, 'Api - error.response')
        if (status === 400) {
          console.log('Api - El correo electrónico ya está registrado');
          // throw new Error('El correo electrónico ya está registrado');
        } else if (status === 500) {
          console.error('Api - Error interno del servidor:', data.message);
          // throw new Error('Error interno del servidor: ' + data.message);
        } else {
          console.error('Api - Error desconocido:', error.message);
          // throw new Error('Error desconocido');
        }
      } else if (error.request) {
        // La solicitud fue hecha pero no se recibió respuesta
        console.error('Api - No se recibió respuesta del servidor', error.request);
        // throw new Error('No se recibió respuesta del servidor');
      } else {
        // Error al configurar o realizar la solicitud
        console.error('Api - Error al conectar con la API:', error.message);
        // throw new Error('Error al registrar correo electrónico: no se pudo conectar con la API');
      }
    }
  },
};

export default ApiService;
