import {expectType} from 'tsd';
import shebangRegex = require('.');

expectType<RegExp>(shebangRegex);
