import { HttpStatus } from "@nestjs/common";

export class ResponseHelper {
  static success<T>(
    data: T,
    message = 'Operation success',
    code = HttpStatus.OK,
  ) {
    return {
      status: 'success',
      message,
      code,
      data,
    };
  }

  static error<T>(
    data: T,
    message = 'Operation failed',
    code = HttpStatus.BAD_REQUEST,
  ) {
    return {
      status: 'error',
      message,
      code,
      data,
    };
  }
}