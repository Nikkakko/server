import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import markdownRouter from './routes/markdown';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;

app.use('/api', markdownRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
