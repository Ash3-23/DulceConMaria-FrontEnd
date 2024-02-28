const { default: mongoose } = require("mongoose");
const express = require("express");
const cors = require("cors");
const nodemailer = require('nodemailer');


//Environment
require("dotenv").config();
//FIREBASE-ADMIN
const admin = require('firebase-admin');
const serviceAccount = require('./firebase/serviceAccountKey.json');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Obtener el usuario y contraseña de variables de entorno o archivo .env
    pass: process.env.EMAIL_PASSWORD
  }
});


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://dulceconmaria-1cc5b-default-rtdb.europe-west1.firebasedatabase.app/'
});

const app = express();
const port = 4000;

// app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Conexión a MongoDB
mongoose.connect('mongodb+srv://nereatrebol2:TTxjK39mS2dspDGS@cluster0.p3y0lbb.mongodb.net/dulce-con-maria');


//Routes
const users = require("./routes/usersRoute");
const emailRoutes = require("./routes/emailRoute")

app.use("/users", users);
app.use('/email', emailRoutes); // Usa las rutas de correos electrónicos


// Leer datos de la base de datos de Firebase
const db = admin.database();
const ref = db.ref('ruta/a/tus/datos');

ref.once('value', (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});

app.listen(port, () => {
  console.log(`Conectados correctamente al servidor, ${port}`);
})

