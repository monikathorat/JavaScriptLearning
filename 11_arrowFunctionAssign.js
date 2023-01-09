
console.log(`###1. `);
let first = ()=>{};console.log(`Good Afternoon,Today is Monday`);
console.log(``);

console.log(`###2. `);
let second = (num1,num2,num3=1)=>{
    console.log(`Result of multiplication of ${num1},${num2},${num3} is: `, num1*num2*num3);
}
second(5,5,2);
second(10,4);
console.log(``);

console.log(`###3. `);
let addition = (val1,val2,val3,val4,val5)=>{
    console.log(`Result of Addition of ${val1},${val2},${val3},${val4},${val5} is: `,val1+val2+val3+val4+val5);
}
addition(100,100,200,349,756);
addition("I am","learning","ES6","features","in depth");