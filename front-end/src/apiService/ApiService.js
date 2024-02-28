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

      // Verificar el código de estado de la respuesta
      if (response.status === 200) {
        console.log('Correo electrónico registrado correctamente');
        return response.data;
      } else if (response.status === 400) {
        console.log('El correo electrónico ya está registrado');
        return response.data;
      } else {
        console.log('Error desconocido al registrar correo electrónico:', response.statusText);
        throw new Error('Error desconocido al registrar correo electrónico');
      }
    } catch (error) {
      console.error('Error al registrar correo electrónico:', error.message);
      throw new Error(`Error al registrar correo electrónico: ${error.message}`);
    }
  },
};

export default ApiService;
