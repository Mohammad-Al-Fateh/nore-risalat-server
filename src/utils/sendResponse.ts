import { Response } from 'express';

type response<T> = {
  success: boolean;
  message: string;
  statusCode: number;
  data: T;
};

const sendResponse = <T>(res: Response, data: response<T>) => {
  res.status(data.statusCode).json({
    success: data.success,
    message: data.message,
    data: data.data,
  });
};

export default sendResponse;
