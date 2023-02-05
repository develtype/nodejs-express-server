import compression from 'compression';
import cors from 'cors';
import express from 'express';
import { dataRouter } from './router/data-router';

const app = express();

app.use(compression());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello express!!');
});

app.use('/data', dataRouter());

app.listen(5000, () => {
  console.log('express is listening on port 5000');
});
