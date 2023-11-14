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

const extractByIndex = (arr, index) => {
  const splitArr = arr.map((element) => element.split('-'));

  return splitArr.map((element) => element[index]);
};

export { extractKeys, extractByIndex };
