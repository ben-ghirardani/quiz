export default function parseText(text) {
  const quote = /&quot;/g;
  const apostrophe = /&#039;/g;
  const ampersand = /&amp;/g;
  let edit = text.replace(quote, '"').replace(apostrophe, '\'').replace(ampersand, '&');
  return edit;
}