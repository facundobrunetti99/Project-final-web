// config/db.js
import mongoose from "mongoose";


const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/tu_basededatos', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB conectado:', conn.connection.host);
  } catch (error) {
    console.error('Error de conexión a MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
