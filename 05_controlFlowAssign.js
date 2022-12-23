console.log(`###1`);
var string = "I am very good IT Developer";
var counter = 0;
for (let index = 0; index < string.length; index++) {
  var char = string.charAt(index);
  var charCopy = char.toLowerCase();
  if (
    charCopy == "a" ||
    charCopy == "e" ||
    charCopy == "i" ||
    charCopy == "o" ||
    charCopy == "u"
  ) {
    counter = counter + 1;
  }
}
console.log(`Toatal count of vowels in given string is: ${counter}`);
console.log(``);
console.log(`###2`);
function sumOfCube(num1, num2, num3, num4, num5) {
  var res =
    num1 * num1 * num1 +
    num2 * num2 * num2 +
    num3 * num3 * num3 +
    num4 * num4 * num4 +
    num5 * num5 * num5;
  console.log(`The sum of cubes of numbers from 1 to 5 is : ${res}`);
}
sumOfCube(1, 2, 3, 4, 5);
console.log(``);
console.log(`###3`);

function oddPositionedChars(value) 
  var res = value.replaceAll(" ", "");

  console.log(res);

  for (let index = 1; index < res.length; index++) {
    while (index <= res.length) {
      var result = res.charAt(index);
      console.log(result);
      index = index + 2;
    }
}
oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon I will be Angular IT Champ");
