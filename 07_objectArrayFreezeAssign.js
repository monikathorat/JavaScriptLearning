
console.log(`###. Output after merging two Objects 'personalDetails' & 'collegeDetails'`);
const personalDetails = {
    name: "Monika Thorat",
    education: "BE-Civil",
    mobile: 7620784232
}
const collegeDetails = {
    clgname: "SKNSCOE",
    city: "Pandharpur",
    noOfDepts: 5,
    principal:"Dr.K.J.Karande"
}
Object.assign(personalDetails,collegeDetails);
console.log(personalDetails);
console.log(``);

console.log(`###. Array of friends after freezing & iterating by using for of loop`);

const friends = ["Bobo", "Momo", "Kiki", "Mimi", "Gigi"]
Object.freeze( friends);

console.log(`My friends are: `)
for (const iterator of friends) {
       console.log(iterator);
   }
console.log(``);

console.log(`###. Revering word 'Technology' as'ygolonhceT' from "Codemind Technology"`);
 const str = "Codemind Technology";  
 let len = str.length;
 let char = str.indexOf("T");
//  console.log(len);
//  console.log(char);
 let newStr = str.slice(9,len);
//  console.log(newStr);
 let finalLen = newStr.length;
// console.log(finalLen);
let reverseString = "Codemind ";
let lastCharPosition = newStr.length-1;
for (let index = lastCharPosition; index >= 0; index-- ){
    let lastChar =  newStr.charAt(index);
    reverseString = reverseString.concat(lastChar);  
}
console.log(reverseString);
