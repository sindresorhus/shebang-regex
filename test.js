import test from 'ava';
import x from './';

test(t => {
	t.true(x.test('#!/usr/bin/env node\nconsole.log("unicorns");\n'));

	const bash = x.exec('#!/bin/bash\necho "unicorns"\n');

	t.is(bash.length, 3);
	t.is(bash[0], '#!/bin/bash');
	t.is(bash[1], '/bin/bash');
	t.falsy(bash[2]);

	const nodeA = x.exec('#!/usr/bin/env node\nconsole.log("unicorns");\n');

	t.is(nodeA.length, 3);
	t.is(nodeA[0], '#!/usr/bin/env node');
	t.is(nodeA[1], '/usr/bin/env');
	t.is(nodeA[2], 'node');

	const python3 = x.exec('#! /usr/bin/env python3\nprint("unicorns");\n');

	t.is(python3.length, 3);
	t.is(python3[0], '#! /usr/bin/env python3');
	t.is(python3[1], '/usr/bin/env');
	t.is(python3[2], 'python3');

	const nodeB = x.exec('#!/usr/bin/env node --no-warnings\nconsole.log("unicorns");\n');

	t.is(nodeB.length, 3);
	t.is(nodeB[0], '#!/usr/bin/env node --no-warnings');
	t.is(nodeB[1], '/usr/bin/env');
	t.is(nodeB[2], 'node');

	const nodeC = x.exec('#! /usr/bin/env node --no-warnings\nconsole.log("unicorns");\n');

	t.is(nodeC.length, 3);
	t.is(nodeC[0], '#! /usr/bin/env node --no-warnings');
	t.is(nodeC[1], '/usr/bin/env');
	t.is(nodeC[2], 'node');
});
