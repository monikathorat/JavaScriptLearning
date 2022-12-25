console.log(`###. Reverse the given array and find the even positioned value in that array`);
let array = [4, 6, 7, 8, 3, 2];
console.log(`Given array is : ${array}`);
let newArray = array.reverse();
console.log(`Reverse of given array :${newArray}`);
var finalArray = [];
for (let index = 0; index <= newArray.length - 1; index++){
  if (index % 2 == 0){
    finalArray = finalArray + (newArray[index]);
      }
}
var finalRes = finalArray.split("");
console.log(`Even positioned value in reverse Array : ${finalRes}`);



