import { HttpStatusCodeEnum } from 'src/type/response-status.type';

export class ServerError {
  httpStatus = HttpStatusCodeEnum.INTERNAL_SERVER_ERROR;
  message = '';
  constructor(httpStatusCode: HttpStatusCodeEnum, message: string) {
    this.httpStatus = httpStatusCode;
    this.message = message;
  }
}
