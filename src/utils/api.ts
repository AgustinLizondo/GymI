const snakeToCamel = (snakeStr: string): string => snakeStr
  .replace(/([-_][a-z])/g, (group) =>
    group.toUpperCase()
      .replace('-', '')
      .replace('_', ''),
  );

// This formatter has to be improved. It's not that efficient.

export const apiDataFormatter = (data) => {
  if (data === null) return data;
  if (typeof data === 'object') {
    if (Array.isArray(data)) {
      return data.map(item => apiDataFormatter(item));
    } else {
      const newData = {};
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const newKey = snakeToCamel(key);
          newData[newKey] = apiDataFormatter(data[key]);
        }
      }
      return newData;
    }
  } else {
    return data;
  }
};
