import test from 'ava';
import x from './';

test(t => {
	t.true(x.test('#!/usr/bin/env node\nconsole.log("unicorns");'));
	t.is(x.exec('#!/usr/bin/env node')[1], '/usr/bin/env node');
});
