console.log(`###1`);
var eligibility = function(age){
    if ((age >= 18) && (age <= 120)){
        console.log(`Age= ${age} is valid data for voting`);        
    }
    if ((age < 18) || (age > 120)) {
        console.log(`Age= ${age} is not valid data for voting`);
    }    
}
eligibility(45);
eligibility(17);
eligibility(8);
eligibility(20);
eligibility(-10);
eligibility(200);
eligibility(0);
console.log(``);

console.log(`###2`);
function gradeCalculation(marks){
    if ((marks >= 90) && (marks <= 100)) {
        console.log(`Funtastic marks: ${marks},Your grade is A+`);        
    }
    if ((marks >= 75) && (marks < 90)) {
        console.log(`Excellent marks: ${marks},Your grade is A`);        
    }
    if ((marks >= 50) && (marks < 75)) {
        console.log(`Good marks: ${marks},Your grade is B`);        
    }
    if ((marks >= 35) && (marks < 50)) {
        console.log(`Marks is ${marks},Your grade is C,Need improvement`);        
    }
    if ((marks <= 0) || (marks > 100)) {
        console.log(`Marks: ${marks}, Please provide the valid marks`);        
    }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);


