import {expectType} from 'tsd';
import shebangRegex from './index.js';

expectType<RegExp>(shebangRegex);
