import limitFunctionCallCount from "../limitFunctionCallCount.js";
function cb(counter) {
  console.log(`The counter is ${counter}`);
}
const result = limitFunctionCallCount(cb, 3);
result();
result();
result();
result();
