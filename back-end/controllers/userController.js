// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
const users = require("../models/users");
// const { signToken, verifyToken } = require('./tokenController');
// const { uploadImage, uploadUserImage } = require('../cloudinaryConfig/index');

// const mySecret = process.env.TOKENSECRET

// SOLICITUDES POST


const postEmail = async (req, res) => {
  try {
    const {
      email
    } = req.body;
    const user = new users ({
      email
    });

    await user.save();
    console.log(user, 'este es el email del usuario');
    
    return res.status(201).send({message: "Se ha registrado correctamente"});
  } catch (error) {
    res.status(400).json({ message: error });
  }
}


module.exports = {
  postEmail
}


// const registerUserNight = async (req, res) => {
//     try {
//         const {
//             usersName,
//             email,
//             password,
//             dni,
//             age,
//         } = req.body;

//         const newUserNight = new UsersNight({
//             usersName,
//             email,
//             password,
//             dni,
//             age,
//         });
//         await newUserNight.save();
//         console.log(newUserNight, "HOLA NUEVO USER");
//         const token = signToken({ userId: newUserNight._id, usersName });
//         res.status(200).json({ result: "new drunk created", token });

//         console.log(newUserNight);
//     } catch (error) {
//         res.status(400).json({ message: error });
//     }
// };

// //LOGIN USERSNIGHT Y PROMANAGER
// const login = async (req, res) => {
//     const { usersName, password } = req.body;
//     const proManager = await ProManager.findOne({ proName: usersName });
//     if (usersName === 'El Direc') {
//         //ProManager
//         const proPassword = await bcrypt.compare(password, proManager.password);
//         const token = signToken({ userId: proManager._id, usersName, userType: "proManager" });
//         return res.status(200).json({ result: "ProManager logueado correctamente", token });
//     }
//     const userNight = await UsersNight.findOne({ usersName: usersName });
//     if (userNight) {
//         const isPasswordValid = await bcrypt.compare(password, userNight.password);
//         if (isPasswordValid) {
//             const token = signToken({ userId: userNight._id, usersName });
//             return res.status(200).json({ result: "Usuario logueado correctamente", token });
//         }
//     }
//     return res.status(401).json({ message: 'Credenciales inválidas' });
// };

// const getUserNightById = async (req, res) => {
//     const { userNightById } = req.params;
//     try {
//         const userNight = await UsersNight.findById(userNightById);
//         if (!userNight) {
//             return res.status(404).json({ message: 'Usuario no encontrado' });
//         }
//         res.json(userNight);
//     } catch (error) {
//         res.status(500).json({ message: 'Error en el servidor' });
//     }
// };

// const getUsersNight = async (req, res) => {
//     const usersNight = await UsersNight.find();
//     res.json(usersNight)
// };

// const deleteUserNightById = async (req, res) => {
//     const { userNightById } = req.params;
//     await UsersNight.deleteOne({ _id: userNightById });
//     res.json("borracho borrado");
// };

// const updateAvatar = async (req, res) => {
//     const { userNightById } = req.params;
//     console.log(userNightById, "este es el usuario");

//     try {
//         // const userNight = await UsersNight.findById(req.userId);
//         const userNight = await UsersNight.findById(userNightById);
//         console.log(userNight, "este es el usuario");

//         const cloudinaryResponse = await uploadUserImage(req.files.avatarImg.tempFilePath);

//         if (!userNight) {
//             return res.status(404).json({ message: 'Usuario no encontrado' });
//         }
//         userNight.avatarImg = cloudinaryResponse.secure_url;
//         await userNight.save();
//         console.log(userNight, "este es el userNight save");

//         res.status(200).json({ avatarIMG: userNight.avatarImg });
//     } catch (error) {
//         console.error('Error al actualizar la imagen de avatar:', error);
//         res.status(500).json({ message: 'Error en el servidor' });
//     }
// };

// const localBooking = async (req, res) => {
//     try {
//         const newBooking = await guardarReservaEnDB(req.body);

//         const userId = req.userId;
//         const reservasActuales = obtenerReservasDelUsuario(userId);
//         reservasActuales.push(newBooking);

//         const nuevoToken = generarNuevoTokenConReservas(userId, reservasActuales);
//         res.status(200).json({ message: 'Reserva realizada con éxito', token: nuevoToken });
//     } catch (error) {
//         res.status(500).json({ message: 'Error al realizar la reserva' });
//     }
// };

// const getUserData = async (req, res) => {
//     try {
//         const token = req.header('Authorization');
//         const arr = token.split(' ');
//         const arrToken = arr[1];
//         const decoded = verifyToken(arrToken);

//         const userNight = await UsersNight.findById(decoded.userId);
//         if (!userNight) {
//             return res.status(404).json({ message: 'Usuario no encontrado' });
//         }
//         res.status(200).json(userNight);
//     } catch (error) {
//         if (error.name === 'JsonWebTokenError') {
//             return res.status(401).json({ message: 'Token inválido' });
//         }
//         res.status(500).json({ message: 'Error en el servidor' });
//     }
// };

// const editUser = async (req, res) => {
//     try {
//         const { userNightById } = req.params;
//         const {
//             usersName,
//             email,
//             password,
//             dni,
//             age,
//             avatarImg
//         } = req.body;

//         const user = await UsersNight.findById(userNightById);
//         console.log(user, "este es el usuario")
//         if (!user) {
//             return res.status(404).json({ message: 'Usuario no encontrado' });
//         }
//         const updateUserFields = {};
//         if (usersName) updateUserFields.usersName = usersName;
//         if (email) updateUserFields.email = email;
//         if (password) {
//             const hashedPassword = await bcrypt.hash(password, 10);
//             updateUserFields.password = hashedPassword;
//         }
//         if (dni) updateUserFields.dni = dni;
//         if (age) updateUserFields.age = age;
//         if (avatarImg) updateUserFields.avatarImg = avatarImg;

//         const userEdited = await UsersNight.findByIdAndUpdate(
//             userNightById,
//             updateUserFields,
//             { new: true }
//         );
//         res.json(userEdited);
//     } catch (error) {
//         console.error('Error al editar el usuario:', error);
//         res.status(500).json({ message: 'Error en el servidor' });
//     }
// };

// module.exports = {
//     login,
//     getUsersNight,
//     getUserNightById,
//     deleteUserNightById,
//     registerUserNight,
//     getUserData,
//     updateAvatar,
//     localBooking,
//     editUser
// };