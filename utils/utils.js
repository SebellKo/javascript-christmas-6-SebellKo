const extractKeys = (arr, baseKeyName, targetKeyName) => {
  if (targetKeyName) {
    const returnArr = arr.reduce((acc, cur) => {
      if (cur.type === targetKeyName) acc.push(cur[baseKeyName]);
      return acc;
    }, []);

    return returnArr;
  }
  return arr.map((item) => item[baseKeyName]);
};

export { extractKeys };
