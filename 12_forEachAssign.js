
console.log(`###1. `);
const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];
arrayNumbers.forEach((value,index)=>{
    console.log(`Index: ${index} and its value: ${value}`);

});
console.log(``);

console.log(`###2. `);
console.log(`Positive numbers from given array are: `);
arrayNumbers.forEach((value)=>{
    if(value >= 0){
    console.log(value);
}
});

console.log(``);

console.log(`###3. `);
console.log(`New array of negative numbers :  `);
const res = [];
arrayNumbers.forEach((value)=>{
    if(value < 0){
        res.push(value);
    }
});
console.log(res);
console.log(``);

console.log(`###4. `);
console.log(`Even numbers from given array are: `);
arrayNumbers.forEach((value)=>{
    if(value%2 == 0 ){
        console.log(value);
    }
});
console.log(``);

console.log(`###5. `);
let sum = 0;
arrayNumbers.forEach((value)=>{
     sum += value;
    

});
console.log(`Sum of all elemnts of given array is: ${sum}`);
console.log(``);

console.log(`###6. `);
console.log(`Even positioned array values are: `);
arrayNumbers.forEach((value,index)=>{
    if(index%2 == 0){
        console.log(value);
    }
});
