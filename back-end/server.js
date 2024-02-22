const { default: mongoose } = require("mongoose");
const express = require("express");
const cors = require("cors");
// const fileupload = require("express-fileupload")

//FIREBASE-ADMIN
const admin = require('firebase-admin');
const serviceAccount = require('./firebase/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://dulceconmaria-1cc5b-default-rtdb.europe-west1.firebasedatabase.app/'
});


// require("dotenv").config();

const app = express();
const port = 3000;

// app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
// app.use(fileupload({
//     useTempFiles: true,
//     tempFileDir: "./uploads/images"
// }))
// Conexión a MongoDB
mongoose.connect('mongodb+srv://nereatrebol2:TTxjK39mS2dspDGS@cluster0.p3y0lbb.mongodb.net/dulce-con-maria');

// const usersNight = require("./routes/usersNightRoute");
// const locals = require("./routes/localsRoute");
// const proManager = require("./routes/proManagerRoute");
// const bookings = require("./routes/bookingRoute");

// app.use("/usersNight", usersNight);
// app.use("/locals", locals);
// app.use("/proManager", proManager);
// app.use("/bookings", bookings);


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


