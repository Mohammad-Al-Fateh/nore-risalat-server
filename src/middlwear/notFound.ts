import { NextFunction, Request, Response } from 'express';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: 'Page not found ! tehre is no such route',
    error:
      'are you lost ? try again and check the url. you might find what you are looking for',
  });
};
export default notFound;
