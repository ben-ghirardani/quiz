export default function checkStringLength(string) {
  let stringLength = string.length;
    if(stringLength <= 100) {
      return "3.5vh"
    } else if (stringLength > 100) {
      return "2vh"
    }
}