import { mapMe } from "./map";

let arr = ["1", 2, 3, 4, 5];

const squareArr2 = mapMe(arr, (num: number) => num ** 2);

console.log(squareArr2);
