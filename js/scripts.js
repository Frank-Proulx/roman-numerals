let array = ["I", "V", "X", "L", "C", "D", "M"];

function romanNumeral(number) {
  let answer = "";
  if (number >= 1 || number <= 3) {
    for (i = 1; i <= number; i++) {
      answer += "I";
    }
  }
  return answer;
}


