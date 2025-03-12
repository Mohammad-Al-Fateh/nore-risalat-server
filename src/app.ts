import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './middlwear/GlobalErrorHandler';
import notFound from './middlwear/notFound';

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//routers
// app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('N A R M M Server is running');
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
