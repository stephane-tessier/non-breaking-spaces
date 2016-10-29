/**
 * Replace spaces that should be non-breakable by `&nbsp;`
 */

var defaultOptions = {
  replacer: '&nbsp;'
};

export function setOptions(key, value) {
  if (typeof key === 'string') {
    defaultOptions[key] = value;
  } else {
    Object.assign(defaultOptions, key);
  }
}

export function noBreak(text, optionsOverride) {
  if (typeof text !== 'string' || !text) {
    return text;
  }
  let options = Object.assign({}, defaultOptions, optionsOverride);

  return text.replace(/ ([?!:;])/g, options.replacer + '$1');
};
