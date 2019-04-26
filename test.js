import test from 'ava';
import shebangRegex from '.';

test('main', t => {
	t.true(shebangRegex.test('#!/usr/bin/env node\nconsole.log("unicorns");'));
	t.is(shebangRegex.exec('#!/usr/bin/env node')[1], '/usr/bin/env node');
});
