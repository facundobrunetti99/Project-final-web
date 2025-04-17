import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../model/User.js';

const router = express.Router();

// Ruta de Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Buscar al usuario por el nombre de usuario
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    // Verificar la contraseña
    console.log('Contraseña encriptada desde la base de datos:', user.password);
    console.log('Contraseña proporcionada:', password);
    
    const isMatch = await bcrypt.compare(password.trim(), user.password.trim());
    if (!isMatch) {
      return res.status(400).json({ message: 'Contraseña incorrecta'+ user.password });
  
    }
    const bcrypt = require('bcrypt');



    // Generar JWT
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Devolver el token
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error del servidor', error });
  }
});

export default router;
