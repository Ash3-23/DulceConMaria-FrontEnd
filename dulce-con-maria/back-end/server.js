const { default: mongoose } = require("mongoose");
const express = require("express");
const cors = require("cors");
// const fileupload = require("express-fileupload")

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



app.listen(port, () => {
    console.log(`Conectados correctamente al servidor, ${port}`);
})


