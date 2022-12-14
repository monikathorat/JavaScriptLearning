console.log(`###1`);
    function squareOfWordLenght(value){
        console.log(`The length of ${value} is ${value.length} and The square of its length ${value.length * value.length}`);
        }
        squareOfWordLenght("javascript");
        squareOfWordLenght("Google Crome");
        squareOfWordLenght("Developer Smart");
        console.log("");
console.log(`###2`);
    var fun = function(){
        var string = "I am Angular Developer";
        console.log(`Given string is "I am Angular Developer"`);
        var len = string.length;
        var splitt = string.split(" ");
        var res  = len / splitt.length;
        var res2 = len * splitt.length;

        console.log(`String Length = ${len}`);
        console.log(`Result after divide it with total number of words is ${res}`);
        console.log(`Result after multiply it with total number of words is ${res2}`);

    }
    fun();
 console.log(""); 
      








