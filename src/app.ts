import express from 'express';
import dotenv from 'dotenv';
import chatRoutes from './routes/chatRoutes';
import path from 'path';

dotenv.config();

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/chat', chatRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

export default app;

