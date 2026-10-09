import Usuario from "../models/Usuario.js";

// Obtener todos los usuarios
export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ mensaje: "Error interno del servidor", error: error.message });
  }
};

// Obtener un usuario por ID
export const obtenerUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findById(id);

    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    res.status(200).json(usuario);
  } catch (error) {
    res.status(400).json({ mensaje: "ID de usuario inválido", error: error.message });
  }
};

// Crear un usuario
export const crearUsuario = async (req, res) => {
  try {
    const nuevoUsuario = new Usuario(req.body);
    const usuarioGuardado = await nuevoUsuario.save();

    res.status(201).json({
      mensaje: "Usuario creado correctamente",
      usuario: usuarioGuardado,
    });
  } catch (error) {
    res.status(400).json({ mensaje: "Error al crear el usuario. Verifique los datos", error: error.message });
  }
};

// Actualizar un usuario
export const actualizarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuarioActualizado = await Usuario.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!usuarioActualizado) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    res.status(200).json({
      mensaje: "Usuario actualizado correctamente",
      usuario: usuarioActualizado,
    });
  } catch (error) {
    res.status(400).json({ mensaje: "Error al actualizar el usuario", error: error.message });
  }
};

// Eliminar un usuario
export const eliminarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuarioEliminado = await Usuario.findByIdAndDelete(id);

    if (!usuarioEliminado) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    res.status(200).json({ mensaje: "Usuario eliminado correctamente" });
  } catch (error) {
    res.status(400).json({ mensaje: "Error al eliminar el usuario", error: error.message });
  }
};