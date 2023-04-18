import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';

export const imageFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    req.fileValidationFailed = true;
    return callback(null, false);
  }
  callback(null, true);
};

export const editFileName = (req, file, callback) => {
  const fileExtName = extname(file.originalname);
  let filename = uuidv4() + fileExtName;
  callback(null, filename);
};

export const PaginationQuery = (field): any => {
  var filters = {};
  field.map((i) => {
    if (i.value != null && i.value != undefined) {
      switch (i.operator) {
        case 'IN':
          const lvalue = i.value.split(' ');

          filters[i.key] = lvalue;
          break;
        case 'LIKE':
          i.value = i.value != null ? `%${i.value}%` : '';
          filters[i.key] = i.value;
          break;
        default:
          filters[i.key] = i.value;
          break;
      }
    }
  });
  return filters;
};

export const UserActionLogging = (type, payload): any => {
  console.log("USER-LOG => [" + new Date() + "] => Type: " + type + " => Payload:", payload);
}

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const calcProbability = (amount, total, sub) => {
  const val1 = Number(amount);
  
  let base = 0;
  if(val1 <= 5000) {
    base = 0.136;
  }
  if(val1 >= 5001 && val1 <= 10000) {
    base = 0.17;
  }
  if(val1 >= 10001 && val1 <= 20000) {
    base = 0.194;
  }
  if(val1 >= 20001 && val1 <= 50000) {
    base = 0.225;
  }
  if(val1 >= 50001 && val1 <= 100000) {
    base = 0.285;
  }
  if(val1 >= 100001 && val1 <= 200000) {
    base = 0.323;
  }
  if(val1 >= 200001 && val1 <= 500000) {
    base = 0.347;
  }
  if(val1 >= 500001) {
    base = 0.354;
  }
  let initAmount = amount * base;
  if(total && sub) {
    let initP = Math.pow(base, 1/total);
    for(var i = 0; i < sub; i++) {
      initAmount = initAmount / initP;
    }
    return initAmount.toFixed(0);
  }else{
    return initAmount.toFixed(0);
  }
}