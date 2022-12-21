console.log(`While Loop`);
console.log(`###1. Numbers from 5 to 15 incrementing by 1`);
var index = 5;
while (index <= 15) {
    console.log(index);
    index++;
}
console.log(``);
console.log(`###2. Numbers from 50 to 40 decrementing by 1`);
var index = 50;
while (index >= 40) {
    console.log(index);
    index--;
}
console.log(``);
console.log(`###3. First 15 odd numbers`);
var index = 1;
while (index <= 15) {
    console.log(index);
    index=(index+2);
}
console.log(``);
console.log(`###4. First 10 even numbers`);
var index = 2;
while (index <= 10) {
    console.log(index);
    index=(index+2);
}
console.log(``);
console.log(`Do While Loop`);
console.log(`###5. Table of 5`);
var index = 5;
do {
    console.log(index);
    index=index+5;
} while (index <= 50);
console.log(`###6. Table of 10`);
var index = 10;
do {
    console.log(index);
    index=index+10;
} while (index <= 100);
console.log(`###7. Table of 10 in reverse order`);
var index = 100;
do {
    console.log(index);
    index=index-10;
} while (index >= 10);
