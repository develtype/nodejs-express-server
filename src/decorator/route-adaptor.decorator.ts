import { NextFunction, Request, Response } from 'express';
import { ServerError } from 'src/error/server.error';
import { ErrorCodeEnum } from 'src/type/error.type';

export function RouteAdaptor(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  const originalMethod = descriptor.value;
  descriptor.value = async function (
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      return await originalMethod.apply(this, [req, res, next]);
    } catch (err) {
      if (err instanceof ServerError) {
        return res.status(err.httpStatus).json({ message: err.message });
      } else {
        const error = new ServerError(
          ErrorCodeEnum.INTERNAL_SERVER_ERROR,
          'Something unexpected happened in server.',
        );
        return res.status(error.httpStatus).json({ message: error.message });
      }
    }
  };
}
