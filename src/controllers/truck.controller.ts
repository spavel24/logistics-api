import { Request, Response } from 'express';
import Truck from '../models/Truck';

// Obtener todos los transportes
export const getTrucks = async (_: Request, res: Response) => {
  const trucks = await Truck.find();
  res.json(trucks);
};

// Crear un nuevo transporte
export const createTruck = async (req: Request, res: Response) => {
  const truck = new Truck(req.body);
  await truck.save();
  res.status(201).json(truck);
};

// Obtener un transporte por ID
export const getTruckById = async (req: Request, res: Response) => {
  try {
    const truck = await Truck.findById(req.params.id);
    if (!truck) return res.status(404).json({ msg: 'Transporte no encontrado' });
    res.json(truck);
  } catch (error) {
    res.status(500).json({ msg: 'Error al obtener Transporte', error });
  }
};

// Actualizar un transporte por ID
export const updateTruck = async (req: Request, res: Response) => {
  try {
    const updatedTruck = await Truck.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedTruck) {
      return res.status(404).json({ message: 'Transporte no encontrado' });
    }

    res.json(updatedTruck);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el transporte', error });
  }
};

// Eliminar un transporte por ID
export const deleteTruck = async (req: Request, res: Response) => {
  try {
    const truck = await Truck.findByIdAndDelete(req.params.id);
    if (!truck) return res.status(404).json({ msg: 'Camión no encontrado' });
    res.json({ msg: 'Transporte eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ msg: 'Error al eliminar el transporte', error });
  }
};
