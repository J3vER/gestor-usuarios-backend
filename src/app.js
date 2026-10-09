import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from "./config/db.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";

dotenv.config();
conectarDB();

const app = express();

// Middlewares
app.use(cors()); // Permite peticiones desde el frontend de Vue
app.use(express.json());

// Rutas de la API
app.use("/api/usuarios", usuarioRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});