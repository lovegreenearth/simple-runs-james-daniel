import { HttpException } from '@nestjs/common';

export const WriteResponse = (
  statusCode: number,
  data: any = {},
  message: string = null,
) => {
  if (statusCode == 200) {
    return { statusCode, message: message ? message : 'Success', data };
  } else if (statusCode == 404) {
    return {
      statusCode,
      message: message ? message : 'Record not found.',
      data: Array.isArray(data) ? [] : {},
    };
  } else {
    return { statusCode, message };
  }
};

export const paginateResponse = (list: any, count: number): any => {
  throw new HttpException(
    {
      statusCode: list.length ? 200 : 404,
      message: list.length ? 'Success' : 'Record not found.',
      data: list,
      count,
    },
    200,
  );
};
