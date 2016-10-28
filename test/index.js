import test from 'tape';
import expected from './expected';
import { noBreak, setOptions } from '../src/index';

// Read all the tests from `expected.json` and run them
test('Main tests', (t) => {
  t.plan(expected.length);

  for (let tryMe of expected) {
    t.equal(noBreak(tryMe.before), tryMe.after, tryMe.message);
  }

  t.end();
});

test('Options tests', (t) => {

  setOptions('replacer', '&#160;');
  t.equal(noBreak('Lorem ipsum ?'), 'Lorem ipsum&#160;?',
    `Using setOptions with params: replacer='&#160;' (key, value)`);

  setOptions({
    replacer: '\\u00a0'
  });
  t.equal(noBreak('Lorem ipsum ?'), 'Lorem ipsum\\u00a0?',
    `Using setOptions with params: replacer='\\\\u00a0' (object)`);

  t.end();
});
