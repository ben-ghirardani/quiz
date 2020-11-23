import parseText from './parseText'

test("converts codes into the correct punctuation", () => {
  expect(parseText('&quot;')).toBe('"');
  expect(parseText('&#039;')).toBe('\'');
  expect(parseText('&#039;')).toBe('\'');
  expect(parseText('&amp;')).toBe('&');
  expect(parseText('&lrm;')).toBe('');
  expect(parseText('&shy;')).toBe('');
  expect(parseText('&oacute;')).toBe('ó');
  expect(parseText('&ldquo;')).toBe('“');
  expect(parseText('&rsquo;')).toBe('’');
  expect(parseText('&hellip;')).toBe('…');
  expect(parseText('&rdquo;')).toBe('”');
  expect(parseText('&Eacute;')).toBe('É');
});