import { Request, Response } from 'express';
import User from '../models/User';

// Obtener todos los usuarios
export const getUsers = async (_: Request, res: Response) => {
  const users = await User.find();
  res.json(users);
};

// Crear nuevo usuario
export const createUser = async (req: Request, res: Response) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
};

// Obtener usuario por ID
export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ msg: 'Usuario no encontrado' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ msg: 'Error al obtener usuario', error });
  }
};

// Actualizar usuario por ID
export const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } 
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el usuario', error });
  }
};

// Eliminar usuario por ID
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ msg: 'Usuario no encontrado' });
    res.json({ msg: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ msg: 'Error al eliminar usuario', error });
  }
};

