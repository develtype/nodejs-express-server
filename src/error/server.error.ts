import { ErrorCodeEnum } from 'src/type/error.type';

export class ServerError {
  httpStatus = ErrorCodeEnum.INTERNAL_SERVER_ERROR;
  message = '';
  constructor(httpStatueCode: ErrorCodeEnum, message: string) {
    this.httpStatus = httpStatueCode;
    this.message = message;
  }
}
