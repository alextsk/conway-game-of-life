

const partial = (fn, ...args) => (...rest) => fn(...args, ...rest);

const deepClone = array => JSON.parse(JSON.stringify(array));

export { partial, deepClone };
