//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

/**
 * The map() method creates a new array
 * populated with the results
 * of calling a provided function on every element in the calling array.
 */
export const mapMe = (arr: Array<any>, fn: Function) => {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i], i, arr));
  }
  return newArray;
};
