# Library

The description of the library.

## Installation and Usage

### Installation

To install this javascript module.

```bash
npm install non-breaking-spaces
```

### Usage

Convert text and HTML so that white spaces before ponctuation are transformed into non-breaking spaces (`&nbsp;`).

```javascript
// import CommonJS
var nonBreakingSpaces = require('non-breaking-spaces');

var text = nonBreakingSpaces.noBreak('Ce texte nécessite une petite correction !');
// Ce texte nécessite une petite correction&nbsp;!
```


or with EcmaScript6:
```javascript
// import ES6 Module
import {noBreak as nonBreakingSpaces} from 'non-breaking-spaces';

var text = nonBreakingSpaces('Ce texte nécessite une petite correction !');
// Ce texte nécessite une petite correction&nbsp;!
```

You may also want to change the replacer:
```javascript
nonBreakingSpaces.setOptions('replacer', '&#160;');
// or
nonBreakingSpaces.setOptions({
  replacer: '\\u00a0'
});
```
