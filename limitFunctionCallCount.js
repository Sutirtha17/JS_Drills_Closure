export default function limitFunctionCallCount(cb, n) {
  let counter = 0;
  return () => {
    if (counter < n) {
      counter += 1;
      cb(counter);
    } else return null;
  };
}
