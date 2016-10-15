import assert from 'assert';
import co from './index';

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
      assert.equal(x, 5);
    });
  });

  it('set 2', () => {
    co(function* () {
      const a = yield getPromise(1);
      const b = yield getPromise(2);
      const c = yield getPromise(3);

      assert.deepEqual([1, 2, 3], [a, b, c]);
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

      assert.equal(error.message, 'boom');
      const ret = yield getPromise(1);
      assert.equal(ret, 1);
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
      assert.equal(error.message, 'boom');
    });
  });
});
