'use strict';
var test = require('ava');
var shebangRegex = require('./');

test(function (t) {
	t.assert(shebangRegex.test('#!/usr/bin/env node\nconsole.log("unicorns");'));
	t.end();
});
