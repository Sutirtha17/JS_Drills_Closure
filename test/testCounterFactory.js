import counterFactory from "../counterFactory.js";
const result = counterFactory();
console.log(result.increment());
console.log(result.decrement());
