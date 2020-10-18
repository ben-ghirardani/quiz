export default function setFontSize(num) {
  if (num <= 30) {
    return "6vh"
  } else if (num > 30 && num < 100) {
    return "5vh"
  } else if (num > 100) {
    return "3.5vh"
  }
}