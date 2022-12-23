 

function factorialNumber(num) {
  var fact = 1;
  for (var index = num; index >= 1; index--) {
    fact = fact * index;
  }
  console.log(`Given number is: ${num} and its factorial is: ${fact}`);
}
factorialNumber(5);
factorialNumber(7);
factorialNumber(8);
factorialNumber(12);


// function factorialNumber(num){
// var fact = 1;
// for (var index = 1; index <= num; index++){ 
//      fact = fact * index;
// }
//     console.log(`${fact}`);
// }
// factorialNumber(5);
// factorialNumber(7);
// factorialNumber(8);
// factorialNumber(12);


