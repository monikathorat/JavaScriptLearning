console.log(`###1`);
var fun = function (num1,num2){
   var greatestNum = (num1 > num2) ? num1 : num2;
   console.log(`Greatest number from ${num1} and ${num2} is ${greatestNum}`);
   }
fun(10,-10);
fun(800,899);
console.log("");

console.log(`###2`);

var fun = function(value){
    var res = ((value % 2)==0) ? "Even Number" : "Odd Number";
    console.log(`${value} is ${res}`);
}
fun (29);
fun (44);
fun (0);
fun (101);
console.log("");

console.log("###3");
var fun = function(value){
    var len = value.length; 
    var res = ((len % 2)==0) ? "EVEN" : "ODD";
    console.log(`Length of word ${value} is ${len} and its ${res}`);
    return res;
    

}
var res = fun("JavaScript");
var res = fun("developer");
var res = fun("Google");




