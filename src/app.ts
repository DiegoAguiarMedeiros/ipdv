import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config';
import bodyParser from 'body-parser';
import logger from './config/logger';
import initDB from './config/postgresConfig';
import publicRoutes from './publicRoutes';

initDB();

const app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(cors());
app.options('/', cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  if (req.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

app.use(morgan('dev'));
app.use(publicRoutes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  logger.info(`App listening at port ${port}.`);
});
