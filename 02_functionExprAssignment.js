console.log("#1st QUESTION");
var square = function(num){
    var res = num*num;
    console.log("Square of",num,"=",res);
}
square(5);
square(6);
square(25);
square(100);
console.log("=======================================================================================");
console.log("#2nd QUESTION");
var type = typeof square;
console.log("Type of square function is:",type);
console.log("============================================================================================");
console.log("#3rd QUESTION");
var rect = function(len,wid){
    var area = len*wid;
    console.log("Area of rectangle plot is ",area);
}
rect(499,917);
console.log("==============================================================================================");
console.log("#4th QUESTION");
 var swapValues = function (val1,val2){
    console.log("Before Swap :",val1,val2);
    var temp = val1;
    val1 = val2;
    val2 = temp;
    console.log("After Swap :",val1,val2);
}
swapValues("Virat","Anushka");
swapValues(1000,2000);
console.log("=================================================================================================");
console.log("#5th QUESTION");
var string = "JS the most popular language";
console.log("Given String = JS the most popular language");
console.log("A-->Total character in string =",string.length);
console.log("B-->Character at index 6 =",string.charAt(6));
console.log("C-->Character atindex 11 =",string.charAt(11));
console.log("D-->Last character is ",string.charAt(27));
console.log("E-->First character is ",string.charAt(0));
var s = function(len){
    var final = len*len;
    console.log("F-->Square of length of string is ", final);
}
s(string.length);
console.log("=================================================================================================================");

