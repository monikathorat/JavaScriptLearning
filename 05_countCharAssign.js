
function countChar(string){
    var counter = 0;
    for(let index = 0; index < string.length; index++){
        var char = string.charAt(index);
        if (char =='a' || char == 'A') {
            console.log(`The count of ${char}`);
            counter = counter + 1;
            
        }
    } 
    console.log(`${string} ${counter}`);

}
countChar("I Am Learning JavaScript, The Language of internet");
console.log(``);
countChar("My favourite movie is LAggAn");
console.log(``);