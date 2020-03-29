// @ts-check

import co from '../src';

const getPromise = (val, err) =>
  new Promise((resolve, reject) => {
    if (err) {
      reject(err);
      return;
    }
    resolve(val);
  });

describe('HexletCo', () => {
  it('set 1', () => {
    co(function* () {
      const x = yield getPromise(5);
      expect(x).toBe(5);
    });
  });

  it('set 2', () => {
    co(function* () {
      const a = yield getPromise(1);
      const b = yield getPromise(2);
      const c = yield getPromise(3);

      expect([1, 2, 3]).toEqual([a, b, c]);
    });
  });

  it('set 3', () => {
    let error;

    co(function* () {
      try {
        yield getPromise(1, new Error('boom'));
      } catch (err) {
        error = err;
      }

      expect(error.message).toBe('boom');
      const ret = yield getPromise(1);
      expect(ret).toBe(1);
    });
  });

  it('set 4', () => {
    co(function* () {
      let error;
      try {
        yield getPromise(5);
        throw new Error('boom');
      } catch (err) {
        error = err;
      }
      expect(error.message).toBe('boom');
    });
  });

  it('set 5', () => {
    const result = co(function* () {
      const a = yield getPromise(1);
      return a;
    });
    return expect(result).resolves.toBe(1);
  });

  it('set 6', () => {
    const result = co(function* () {
      const data = yield getPromise(1, new Error('boom'));
      return data;
    });

    return expect(result).rejects.toBeInstanceOf(Error);
  });
});
