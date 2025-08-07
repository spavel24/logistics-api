import mongoose from 'mongoose';

const truckSchema = new mongoose.Schema({
  plate: { type: String, required: true },
  model: { type: String, required: true }
});

export default mongoose.model('Truck', truckSchema);
