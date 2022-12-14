

var num1 = 10;
var num2 = 5;

console.log(`============================================Arithmatic Operators========================================================`);

var addResult = num1 + num2;
console.log(`Addition is ${addResult} `);


console.log(`Substraction is ${num1 - num2}`);

var mulResult = num1 * num2;
console.log(`Multiplication is ${mulResult}`);

var divResult = num1 / num2;
console.log(`Division is ${divResult}`);

var modulusResult = num1 % num2;
console.log(`Division is ${modulusResult}`);

var modulusResult = num1 % 4;
console.log(`Division is ${modulusResult}`);

console.log(`============================================Unary Operators========================================================`);

var num3 = 10;
var result = ++num3; //num3 = num3 + 1
console.log(`Increment operator result is ${result}`);

var num4 = 5;
var res = --num4; // num4 -1
console.log(`Decrement operator result is ${res} `);


console.log(`============================================Assignment Operators========================================================`);

var num1 = 10;
var num2 = 5;

var modulusResult = num1 % 3;
console.log(`Division is ${modulusResult}`);

num1 += num2;//num1 + num2 = num1(store in num1)now num1 = 15 for further operation

console.log(`Compound Addition ${num1} `);

console.log(`Compound Substraction ${num1-=num2} `);//num1=15 here

console.log(`============================================Copmarison Operators========================================================`);

var num1 = 10;
var num2 = 5;

var result = num1 > num2;
console.log(`> opearator - greater than -- ${result} `);

var result = num1 < num2;
console.log(`< opearator - less than -- ${result} `);


var result = num1 >= num2;
console.log(`>= opearator - greater than equal -- ${result} `);


var result = num1 <= num2;
console.log(`<= opearator - less than equal -- ${result} `);

