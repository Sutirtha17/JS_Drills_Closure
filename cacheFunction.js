export default function cacheFunction(cb) {
  let cache = new Set();
  return (num) => {
    if (cache.has(num)) {
      return cache;
    } else {
      cache.add(num);
      cb(num);
      return cache;
    }
  };
}
