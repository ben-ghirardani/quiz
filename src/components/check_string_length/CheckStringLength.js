export default function checkStringLength(type, string) {
  let stringLength = string.length;

  if(type === "question") {
    if(stringLength <= 30) {
      return "6vh"
    } else if (stringLength > 30 && stringLength < 100) {
      return "5vh"
    } else if (stringLength >= 100) {
      return "3.5vh"
    }
  } else if (type === "answer") {
    if(stringLength <=50) {
      return "5vh"
    } else if (stringLength >50) {
      return "3.5"
    }
  } else return "5vh"

}