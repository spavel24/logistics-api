import express from 'express';
import userRoutes from './routes/user.routes';
import truckRoutes from './routes/truck.routes';
import orderRoutes from './routes/order.routes';
import locationRoutes from './routes/location.routes';

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/trucks', truckRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/locations', locationRoutes);

export default app;
