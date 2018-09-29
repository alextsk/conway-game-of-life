const partial = (fn, ...args) => (...rest) => fn(...args, ...rest);
import { cloneDeep } from  'lodash';

const deepClone = array => cloneDeep(array);

export { partial, deepClone };
