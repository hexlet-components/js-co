// @flow

/**
 * Generator based control flow
 * @name co
 * @example
 * co(function* () {
 *   const result = yield Promise.resolve(true);
 *   return result;
 * }).then(value => {
 *   console.log(value);
 * }, err => {
 *   console.error(err.stack);
 * });
 */
const co = (generator: () => void, ...args: any) => {
  const iterator = generator(...args);

  const next = (result) => {
    const value = Promise.resolve(result.value);
    if (result.done) {
      return value;
    }

    return value.then(
      res => next(iterator.next(res)),
      err => next(iterator.throw(err)),
    );
  };

  try {
    return next(iterator.next());
  } catch (err) {
    return Promise.reject(err);
  }
};

export default co;
