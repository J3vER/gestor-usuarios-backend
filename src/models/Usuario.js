import mongoose from "mongoose";

const usuarioSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    correo: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    rol: {
      type: String,
      required: true,
      enum: ["Administrador", "Estudiante", "Profesor"],
      default: "Estudiante",
    },
    estado: {
      type: String,
      required: true,
      enum: ["Activo", "Inactivo"],
      default: "Activo",
    }
  },
  {
    timestamps: true,
  }
);

const Usuario = mongoose.model("Usuario", usuarioSchema);
export default Usuario;