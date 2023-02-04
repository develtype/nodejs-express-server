import compression from 'compression';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(compression());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello express!!');
});

app.listen(5000, () => {
  console.log('express is listening on port 5000');
});
