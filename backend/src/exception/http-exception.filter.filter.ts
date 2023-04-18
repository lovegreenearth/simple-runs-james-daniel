import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import {
  QueryFailedError,
  EntityNotFoundError,
  CannotCreateEntityIdMapError,
} from 'typeorm';


@Catch(QueryFailedError)
export class QueryFailedExceptionFilter implements ExceptionFilter {
  catch(exception: QueryFailedError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    var { message } = exception;
   
    if (exception?.driverError?.code == 'ER_DUP_ENTRY') {
      message = 'Duplicate entry exists.';
    }
    if (exception.driverError.code == 'ER_BAD_NULL_ERROR') {
      message = 'something went wrong.';
    }
    if (exception.driverError.code == 'ER_NO_REFERENCED_ROW_2') {
      message = 'Invalid id';
    }

    response
      .status(200)
      .json(GlobalResponseError(HttpStatus.BAD_REQUEST, message, request));
  }
}

const GlobalResponseError: (
  statusCode: number,
  message: string,
  request: Request,
) => IResponseError = (
  statusCode: number,
  message: string,
  request: Request,
): IResponseError => {
  return {
    statusCode: statusCode,
    message,
    timestamp: new Date().toISOString(),
    path: request.url,
    method: request.method,
  };
};

interface IResponseError {
  statusCode: number;
  message: string;
  timestamp: string;
  path: string;
  method: string;
}
