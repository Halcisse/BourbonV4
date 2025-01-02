import dotenv from 'dotenv';
import express, { json } from 'express';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import cors from 'cors';
import bodyParser from 'body-parser';


dotenv.config();
connectDB();
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/products', productRoutes);
app.use('/api/payments', paymentRoutes);

const PORT = process.env.PORT || 5173;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// const http = require('http');
// const server = http.createServer(app);
// server.listen(PORT);