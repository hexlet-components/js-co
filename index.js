// @flow

import 'babel-polyfill';

const onFulfilledGenerator = (reject, iterator) => next => result => {
  try {
    const ret = iterator.next(result);
    return next(ret);
  } catch (e) {
    return reject(e);
  }
};

const onRejectedGenerator = (reject, iterator) => next => err => {
  try {
    const ret = iterator.throw(err);
    return next(ret);
  } catch (e) {
    return reject(e);
  }
};

const nextGenerator = (resolve, onFulfilled, onRejected) => {
  const next = ({ done, value }) => {
    if (done) {
      return resolve(value);
    }
    return value.then(onFulfilled(next), onRejected(next));
  };

  return next;
};

export default (generator: () => any, ...args: Array<any>) =>
  new Promise((resolve, reject) => {
    const iterator = generator(...args);
    const onFulfilled = onFulfilledGenerator(reject, iterator);
    const onRejected = onRejectedGenerator(reject, iterator);
    const next = nextGenerator(resolve, onFulfilled, onRejected);

    onFulfilled(next)({ done: false, value: Promise.resolve() });
  });
