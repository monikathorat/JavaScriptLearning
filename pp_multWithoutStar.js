
function mult(val1,val2) {
    var res = 0;
    for (let index = 0; index < val2; index++) {        
        res += val1;
    }
    return res; 
}
var res = mult(5,8);
console.log(res);

//javascript program for multiplication of two numbers without using *

function multiply(a, b) {
    let answer = 0;
    for (let i = 0; i < b; i++) {
        answer += a;
    }
    return answer;
}
console.log(multiply(3, 5)); // 15
