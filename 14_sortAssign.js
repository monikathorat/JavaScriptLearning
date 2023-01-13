
console.log(``);
const array_roll_numbers = [113,45,56,11,32,45,109,799,56,45];
console.log(`Given array: `);
console.log(array_roll_numbers);
console.log(``);

console.log(`###1. Reverse the array `);
array_roll_numbers.reverse();
console.log(array_roll_numbers);
console.log(``);

console.log(`###2. Array after sort() `);
array_roll_numbers.sort();
console.log(array_roll_numbers);
console.log(``);

console.log(`###3. Array in ascending order `);
let ascSort = array_roll_numbers.sort((a,b)=>{
    return a > b ? 1 : -1;
});
console.log(ascSort);
console.log(``);

console.log(`###4. Greatest number from array `);

let grtNum = ascSort[ascSort.length-1];
console.log(` ${grtNum}`);
console.log(``);

console.log(`###5. Smallest number from array `);
let smlNum = ascSort[0];
console.log(` ${smlNum}`);
console.log(``);

console.log(`###6. Array after removing duplicate elements `);
let res = new Set(array_roll_numbers);
console.log(res);