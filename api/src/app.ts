import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import router from './routes';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const corsOptions = {
  origin: '*',
  methods: 'GET, POST, PUT, PATCH, DELETE', 
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));
app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
