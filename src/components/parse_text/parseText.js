export default function parseText(text) {
  const quote = /&quot;/g;
  const apostrophe = /&#039;/g;
  const ampersand = /&amp;/g;
  const lrm = /&lrm;/g;
  const shy = /&shy;/g;
  const acuteo = /&oacute;/g
  const leftDoubleQuote = /&ldquo;/g;
  const rightSingleQuote = /&rsquo;/g;
  const horizontalEllipsis = /&hellip;/g;
  const rightDoubleQuote = /&rdquo;/g;
  const eAcute = /&Eacute;/g;

  let edit = text.replace(quote, '"').replace(apostrophe, '\'').replace(ampersand, '&').replace(lrm, '').replace(shy, '').replace(acuteo, 'ó').replace(leftDoubleQuote, '“').replace(rightSingleQuote, '’').replace(horizontalEllipsis, '…').replace(rightDoubleQuote, '”').replace(eAcute, 'É');
  return edit;
}