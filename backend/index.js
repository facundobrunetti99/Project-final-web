import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import User from "../backend/model/User.js"; // Asegúrate de que la ruta sea correcta
import authRouter from "../backend/routers/auth.js";

const app = express();
import dotenv from 'dotenv';
dotenv.config();
// Conectar a MongoDB
mongoose
  .connect("mongodb://localhost:27017/tu_basededatos")
  .then(() => {
    console.log("Conectado a MongoDB");
    createDefaultAdmin(); // Crear el admin por defecto
  })
  .catch((error) => console.error("Error al conectar con MongoDB", error));

// Función para crear un administrador por defecto
const createDefaultAdmin = async () => {
  const adminExists = await User.findOne({ username: "facu" });

  if (!adminExists) {
    const admin = new User({
      username:"facu",
      password:"123", // Asegúrate de encriptar la contraseña
    })

    const salt = await bcrypt.genSalt(10);
    admin.password = await bcrypt.hash(admin.password, salt); // Encriptar la contraseña
    await admin.save();

    console.log("Administrador por defecto creado", admin);
  } else {
    console.log("El usuario administrador ya existe" );
  }
};

app.use(cors());
app.use(bodyParser.json());

// Rutas de autenticación
app.use("/api/auth", authRouter);

app.listen(5000, () => {
  console.log("Servidor corriendo en el puerto 5000");
});
