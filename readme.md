# shebang-regex [![Build Status](https://travis-ci.org/sindresorhus/shebang-regex.svg?branch=master)](https://travis-ci.org/sindresorhus/shebang-regex)

> Regular expression for matching a [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) line


## Install

```
$ npm install --save shebang-regex
```


## Usage

```js
const shebangRegex = require('shebang-regex');
const str = '#!/usr/bin/env node\nconsole.log("unicorns");';

shebangRegex.test(str);
//=> true

shebangRegex.exec(str)[0];
//=> '#!/usr/bin/env node'
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
