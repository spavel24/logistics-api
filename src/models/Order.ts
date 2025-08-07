import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  truck: { type: mongoose.Schema.Types.ObjectId, ref: 'Truck', required: true },
  origin: { type: mongoose.Schema.Types.ObjectId, ref: 'Location', required: true },
  destination: { type: mongoose.Schema.Types.ObjectId, ref: 'Location', required: true },
  status: { type: String, enum: ['pending', 'in_transit', 'delivered'], default: 'pending' }
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);
