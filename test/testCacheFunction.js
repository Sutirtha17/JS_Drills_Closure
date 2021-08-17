import cacheFunction from "../cacheFunction.js";
const cb = (num) => {
  console.log(`${num} is a new entry in argument list.`);
};
const result = cacheFunction(cb);
console.log(result());
console.log(result(5));
console.log(result(3));
console.log(result(5));
console.log(result(7));
