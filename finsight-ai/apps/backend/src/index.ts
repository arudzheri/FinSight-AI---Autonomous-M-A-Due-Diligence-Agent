import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/api';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Закачане на AI маршрутите
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`🚀 FinSight AI Backend operating on port ${PORT}`);
});
