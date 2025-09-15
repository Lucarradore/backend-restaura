import express from 'express';
import cors from 'cors';
import dishesRoutes from './routes/dishesRoutes.js';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/dishes', dishesRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

export default app;