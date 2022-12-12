var showResult= function(){
    console.log("show____");
}
showResult();

//we can store function as a value in JS
var substraction = function (num1, num2){
    var result = num1 - num2;
    console.log("substraction =", result);
}
substraction(45, 20);

//with return
var substraction = function (num1, num2){
    var result = num1 - num2;
    console.log("substraction =", result);
    return result;
}
var result = substraction(45, 20);
console.log(result);