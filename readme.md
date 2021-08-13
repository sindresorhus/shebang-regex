# shebang-regex

> Regular expression for matching a [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) line

## Install

```
$ npm install shebang-regex
```

## Usage

```js
import shebangRegex from 'shebang-regex';

const string = '#!/usr/bin/env node\nconsole.log("unicorns");';

shebangRegex.test(string);
//=> true

shebangRegex.exec(string)[0];
//=> '#!/usr/bin/env node'

shebangRegex.exec(string)[1];
//=> '/usr/bin/env node'
```

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-shebang-regex?utm_source=npm-shebang-regex&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
