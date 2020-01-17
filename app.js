const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
import morgan from 'morgan';


/*  import Routes here */
import rest from './rest';

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors({
  origin: "*",
  credentials: true
}));
app.use(morgan('dev'));

rest(app);

export default app;