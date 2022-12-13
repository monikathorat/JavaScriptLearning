function stringHandsOn(){
    var string = "     Hey you are doing good, keep it up     ";

console.log(`###1. Given string is "     Hey you are doing good, keep it up     "`);
var len = string.length;
console.log("");
console.log(`###2. Length of given string is `,len);

var trimedString = string.trim();
console.log("");
console.log(`###3. String after removing leading and trailing extra spaces= `,trimedString);
var stringlen = trimedString.length;

var count = len - stringlen;
console.log("");
console.log(`###4. Count of extra spaces removed in step 3 is `,count);
console.log("");
console.log(`###5. First character after trim is `,trimedString.charAt(0),`and last character after trim is `,trimedString.charAt(stringlen-1));
var words = trimedString.split(" ");
console.log("");
console.log(`###6. Count of total word in  trimed string is `,words.length);
var index = trimedString.indexOf("good");
console.log("");
console.log(`###7. Index of word "good" is `,index);
var sub = trimedString.substring(22);
console.log("");
console.log(`###8. with substring method---`,sub);
var slicee = trimedString.slice(22);
console.log(`      with slice method---`,slicee);
var end = trimedString.endsWith("up");
console.log("");
console.log(`###9. Is string ends with word "up" after step 3 - `,end);
var start = trimedString.startsWith("Hey");
console.log("");
console.log(`###10. Is string starts with word "Hey" after trimming - `,start);
}
stringHandsOn();