const snakeToCamel = (snakeStr: string): string => snakeStr
  .replace(/([-_][a-z])/g, (group) =>
    group.toUpperCase()
      .replace('-', '')
      .replace('_', ''),
  );

export const apiDataFormatter = (dataArray) => dataArray.map(
  data => {
    const newData = {};
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const newKey = snakeToCamel(key);
        newData[newKey] = data[key];
      }
    }
    return newData;
  });
