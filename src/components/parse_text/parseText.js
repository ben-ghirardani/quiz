export default function parseText(text) {
  const quote = /&quot;/;
  const apostrophe = /&#039;/;
  let edit = text.replaceAll(quote, '"').replaceAll(apostrophe, "'");
  return edit;
}