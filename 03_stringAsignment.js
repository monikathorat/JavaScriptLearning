function stringTemplateAssign(){
    console.log("###1");
console.log(`My deam company name is "TCS"`);
console.log("");
var myHobby1 = "Reading ";
var myHobby2 = "Listening Music ";
var myHobby3 = "Painting";
console.log("###2.1");
console.log(`My hobbies are ${myHobby1}, ${myHobby2} and ${myHobby3}-----with variable substitution`);
console.log("###2.2");

console.log(`My hobbies are `,myHobby1 + `, `+ myHobby2 +`and `+ myHobby3 +`-----with concat operator`);
}
stringTemplateAssign();