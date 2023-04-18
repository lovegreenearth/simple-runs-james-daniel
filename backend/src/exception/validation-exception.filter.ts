import { BadRequestException, HttpException } from '@nestjs/common';

export const ValidationFilter = (error) => {
  let errors = [];
  error.forEach((i) => {
    if (i.children.length) {
      i.children.forEach((d) => {
        d.constraints &&
          errors.push(d.constraints && Object.values(d.constraints).join(','));
      });
    }
    i.constraints &&
      errors.push(i.constraints && Object.values(i.constraints).join(','));
  });
  throw new HttpException({
    statusCode: 400,
    message: 'Bad Request',
    errors,
  },200);
};
