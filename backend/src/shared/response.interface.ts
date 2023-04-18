export const response = (
  data: any = {},
  statusCode: number = 200,
  error: [] = [],
) => {
  let message = '';

  switch (statusCode) {
    case 200:
      message = 'success';
      break;
    case 201:
      message = 'record created successfully';
      break;
    case 400:
      message = 'bad request';
      break;
    case 401:
      message = 'unauthorized';
      break;
    case 403:
      message = 'forbidden';
      break;
    case 404:
      message = 'not found';
      break;
    case 409:
      message = 'conflict';
      break;
    case 422:
      message = 'invalid data';
      break;
    case 500:
      message = 'internal server error';
      break;
    default:
      break;
  }
  return {
    statusCode,
    message,
    data,
    error,
  };
};
