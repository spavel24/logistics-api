import { Request, Response } from 'express';
import Location from '../models/Location';

// Obtener todas las localizaciones
export const getLocations = async (_: Request, res: Response) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving locations' });
  }
};

// Crear una localización
export const createLocation = async (req: Request, res: Response) => {
  try {
    const location = new Location(req.body);
    await location.save();
    res.status(201).json(location);
  } catch (err: any) {
    res.status(400).json({ message: err.message || 'Error creating location' });
  }
};

// Obtener localización por ID
export const getLocationById = async (req: Request, res: Response) => {
  try {
    const location = await Location.findById(req.params.id);
    if (!location) return res.status(404).json({ message: 'Location not found' });
    res.json(location);
  } catch (err) {
    res.status(400).json({ message: 'Invalid ID format' });
  }
};

// Actualizar localización por ID
export const updateLocation = async (req: Request, res: Response) => {
  try {
    const updatedLocation = await Location.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedLocation) return res.status(404).json({ message: 'Location not found' });
    res.json(updatedLocation);
  } catch (err) {
    res.status(400).json({ message: 'Invalid ID format' });
  }
};

// Eliminar localización por ID
export const deleteLocation = async (req: Request, res: Response) => {
  try {
    const deletedLocation = await Location.findByIdAndDelete(req.params.id);
    if (!deletedLocation) return res.status(404).json({ message: 'Location not found' });
    res.json({ message: 'Location deleted' });
  } catch (err) {
    res.status(400).json({ message: 'Invalid ID format' });
  }
};
