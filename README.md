# js-co

[![github action status](https://github.com/hexlet-components/js-co/workflows/Node%20CI/badge.svg)](https://github.com/hexlet-components/js-co/actions)

## Install

```sh
npm install @hexlet/co
```

## Usage example

```javascript
import co from '@hexlet/co';

co(function* () {
  const result = yield Promise.resolve(true);
  return result;
}).then(value => {
  console.log(value);
}, err => {
  console.error(err.stack);
});

// => true
```

For more information, see the [Full Documentation](https://github.com/hexlet-components/js-co/tree/master/docs)

[![Hexlet Ltd. logo](https://raw.githubusercontent.com/Hexlet/hexletguides.github.io/master/images/hexlet_logo128.png)](https://ru.hexlet.io/pages/about?utm_source=github&utm_medium=link&utm_campaign=js-co)

This repository is created and maintained by the team and the community of Hexlet, an educational project. [Read more about Hexlet (in Russian)](https://ru.hexlet.io/pages/about?utm_source=github&utm_medium=link&utm_campaign=js-co).
