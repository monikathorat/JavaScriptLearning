
console.log(`###1. Creating empty object and adding some properties`);
const professor= {
}
professor.name = "Sasha";
professor.age = 45;
professor.height = 5.5;
professor.weight = 55;
console.log(Object.keys(professor));
console.log(professor);
console.log(``);
console.log(`###2. Including nested object degrees`);
professor.degrees= {
        engineering:"CSE",
        PHD:"Adv Computing",
        master: "Programming"
       }
console.log(Object.keys(professor))
console.log(professor.degrees);
console.log(``);

console.log(`###3. Including nested object certificates`);
professor.certificates= {
    1: "Hacker Rank Participation",
    2: "Certificate in IFE course",
    3: "Certificate in Adv Programming"
}
console.log(Object.keys(professor))
console.log(professor.certificates);
console.log(``);

console.log(`###4. Adding function`);
professor.degrees= {
    engineering:"CSE",
    PHD:"Adv Computing",
    Master:"Programming",
    add:function() {
       return this.engineering+` ` + this.PHD+` `+this.Master;     
    }
}
const allDegrees = professor.degrees.add();
console.log(`Total degrees of professor are: ${allDegrees}`);
    console.log(``);
//
console.log(`###5. Adding new property in object`);
professor.mobileNumber = 4587123658;
console.log(Object.keys(professor))
console.log(professor);
console.log(``);

console.log(`###6. Modifying age property of object`);
professor.age = 50;
console.log(professor);
console.log(``);

console.log(`###7. Deleting one certificate from object`)
delete professor.certificates[1];
console.log(professor.certificates);
console.log(``);

console.log(`###8. Adding one certificate in object`)
professor.certificates= {
    1: "Certificate in Web Development Course",
    2: "Certificate in IFE course",
    3: "Certificate in Adv Programming"
}
console.log(professor.certificates);
console.log(``);

console.log(`###9. Adding one certificate in object`)
console.log(professor.certificates[1]);


    
