import cors from 'cors';
import express, { Application } from 'express';
import morgan from 'morgan';
import rootRouter from './routes';
import notFound from './middlewares/notFound';
import globalErrorHandler from './middlewares/globalErrorhandler';

const app: Application = express();

app.use(express.json());
app.use(morgan('dev'));

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://inventory-navy.vercel.app',
    'https://inventory-management-system-4t5h5c65p.vercel.app'
  ],
  credentials: true,
}));


// application routes
app.use('/api/v1', rootRouter);

app.use(globalErrorHandler);

app.use(notFound);

export default app;
