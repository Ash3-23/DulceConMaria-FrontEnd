import axios from 'axios';

const enviarCorreo = async (email) => {
  try {
    const response = await axios.post('/api/correo', { email });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

enviarCorreo('correo@example.com');
