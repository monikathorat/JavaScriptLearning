
function show(name, age, ...details){
    console.log(name,age, details);
}
show("Sachin", 45, "Mumbai", 101);


function display(...values){
    console.log(values);
}
display("Monni",26,"BE")


// Function with default argument value
console.log("Function with default argument value");
function sum(n1, n2=0){
    console.log(n1, n2);
    console.log(n1+n2); // 30
}
sum(10, 20);
sum(10);
