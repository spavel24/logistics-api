import { Router } from 'express';
import { getTrucks, createTruck, getTruckById, updateTruck, deleteTruck } from '../controllers/truck.controller';

const router = Router();

router.get('/', getTrucks);
router.post('/', createTruck);
router.get('/:id', getTruckById);
router.put('/:id', updateTruck);
router.delete('/:id', deleteTruck);

export default router;
