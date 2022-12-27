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
console.log(`Total count of vowels in given string is: ${counter}`);
console.log(``);

// console.log(`###2`);
// function sumOfCube(num1, num2, num3, num4, num5) {
//   var res =
//     num1 * num1 * num1 +
//     num2 * num2 * num2 +
//     num3 * num3 * num3 +
//     num4 * num4 * num4 +
//     num5 * num5 * num5;
//   console.log(`The sum of cubes of numbers from 1 to 5 is : ${res}`);
// }
// sumOfCube(1, 2, 3, 4, 5);
// console.log(``);
console.log(`###2`);
function sumOfCubes() {
  var sum = 0;
  for (let index = 1; index <= 5; index++) {
    var cube = index * index * index;
    sum = sum + cube;
  }
  console.log(`The sum of cubes of numbers from 1 to 5 is: ${sum}`);
}
sumOfCubes();
console.log(``);

console.log(`###3`);
function oddPositionedChars(value){
  // var res = value.replaceAll(" ", "");
  var res = value.split(" ").join("");
  console.log(``);
  console.log(`Given string is: "${value}"`);
  console.log(`Given string after removing extra spaces: ${res}`);
  var finalRes = "";
  for (let index = 1; index < res.length; index++) {
    while (index <= res.length) {
      var result = res.charAt(index);
      // console.log(result);
      index = index + 2;
      finalRes = finalRes.concat(result);
    }
    console.log(`Odd positioned chars in given string: ${finalRes}`);
}
}
oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon I will be Angular IT Champ");

// console.log(`###3`);
// function oddChars(arg) {
//   var str = "";
//   var pos = 0;
//   console.log(`Given string is: "${arg}"`);
//   for (let index = 0; index < arg.length; index++) {
//     if (arg.charAt(index) != " ") {
//       if (pos % 2 == 1) {
//         str = str.concat(arg.charAt(index));
//       }
//       pos++;
//     }
//   }
//   console.log(`String with odd positioned chars is: ${str}`);
// }
// oddChars("Hard work always pays back");
// oddChars("Soon I will be Angular IT Champ");
