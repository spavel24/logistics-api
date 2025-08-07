import { Request, Response } from 'express';
import Order from '../models/Order';

export const getOrders = async (_: Request, res: Response) => {
  const orders = await Order.find().populate('truck origin destination');
  res.json(orders);
};

export const createOrder = async (req: Request, res: Response) => {
  const order = new Order(req.body);
  await order.save();
  res.status(201).json(order);
};

export const getOrderById = async (req: Request, res: Response) => {
  try {
    const order = await Order.findById(req.params.id).populate('truck origin destination');
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.json(order);
  } catch (err) {
    res.status(400).json({ message: 'Invalid ID format' });
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).populate('truck origin destination');

    if (!updatedOrder) return res.status(404).json({ message: 'Order not found' });
    res.json(updatedOrder);
  } catch (err) {
    res.status(400).json({ message: 'Invalid ID format' });
  }
};

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) return res.status(404).json({ message: 'Order not found' });
    res.json({ message: 'Order deleted' });
  } catch (err) {
    res.status(400).json({ message: 'Invalid ID format' });
  }
};
