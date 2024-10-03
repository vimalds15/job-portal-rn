export const flattenObject = (obj, parent = "", res = {}) => {
  for (let key in obj) {
    if (
      typeof obj[key] === "object" &&
      !Array.isArray(obj[key]) &&
      obj[key] !== null
    ) {
      flattenObject(obj[key], `${parent}${key}.`, res);
    } else {
      res[`${parent}${key}`] = obj[key];
    }
  }
  return res;
};

export const flattenArray = (arr) => {
  return arr.map((item) => {
    return flattenObject(item);
  });
};
