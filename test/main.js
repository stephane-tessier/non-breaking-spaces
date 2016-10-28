import test from 'tape';
import expected from './expected';
import { noBreak } from '../src/index';

// Read all the tests from `expected.json` and run them
test('Main tests', (t) => {
  t.plan(expected.length);

  for (let tryMe of expected) {
    t.equal(noBreak(tryMe.before), tryMe.after, tryMe.message);
  }

  t.end();
});
