/**
 * Replace spaces that should be non-breakable by `&nbsp;`
 */

export function noBreak(text) {
  return text.replace(/ ([?!:;])/g, '&nbsp;$1');
};
