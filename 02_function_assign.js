
console.log("===============================FIRST QUESTION=================================");
function first(){
    console.log("I am learning JS");
}
first();
function second(){
    console.log("JS is an interpreted language");
}
second();
console.log("===============================SECOND QUESTION=================================");

function personalDetails(firstName, lastName, collegeName){
    console.log(firstName, lastName, collegeName);
}
personalDetails("Monika","Thorat","Sinhgad College of Engineering,Korti,Pandharpur");
console.log("===============================THIRD QUESTION=================================");

function swapValueDude(Virat, Anushka){
    console.log( "Before Swap:",Virat,Anushka);
    var temp = Virat;
    Virat = Anushka;
    Anushka = temp;
    console.log("After Swap:",Virat,Anushka);
}
swapValueDude("Virat","Anushka");
swapValueDude(1000,2000);

console.log("===============================FOURTH QUESTION=================================");
function addThreeValues(val1,val2,val3){
    console.log( "Addition of Three Values:" ,val1 + val2 + val3);
    return "addition";
}
var addition = addThreeValues(10.23,600,40);
var addition = addThreeValues("Hello","Good","Morning");


