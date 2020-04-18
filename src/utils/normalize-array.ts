// Create a normalized data structure

export const normalizeArray = (arr: any[], idKey = 'id') =>
  arr.reduce(
    (obj, item) => {
      return {
        ids: [...obj.ids, item[idKey]],
        data: {
          ...obj.data,
          [item[idKey]]: item,
        },
      };
    },
    { ids: [], data: {} },
  );
