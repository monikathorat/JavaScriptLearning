
console.log(`###1.  Defining class 'Vehicle' with data members and constructor`);
console.log(``);
class Vehicle{
    constructor(companyName,color,average,wheeler,speed){
        this.companyName = companyName;
        this.color = color;
        this.average = average;
        this.wheeler = wheeler;
        this.speed =speed;
    }
}
let bike = new Vehicle("Suzuki","Black","40","2 wheeler","240kph");
let car = new Vehicle("BMW","Black","45","4 wheeler","300kph");
let truck = new Vehicle("Tata","Brown","10","12 wheeler","150kph");
let plane = new Vehicle("AirIndia","White","12","6 wheeler","930kph");
let auto = new Vehicle("Bajaj","Black","18","3 wheeler","80kph");
console.log(bike);
console.log(``);
console.log(car);
console.log(``);
console.log(truck);
console.log(``);
console.log(plane);
console.log(``);
console.log(auto);
console.log(``);


console.log(`###2. Defining class 'College' with data members, constructor and member function`);
console.log(``);
class College{
    constructor(clgName, clgLocation, numberOfDept, principal){
        this.clgName = clgName;
        this.clgLocation = clgLocation;
        this.numberOfDept = numberOfDept;
        this.principal = principal;
    }
    collegeDetails(){
        console.log(this.clgName,this.clgLocation,this.numberOfDept,this.principal);
    }

}
let sinhgad = new College("Sinhgad College","Korti","5","Dr.K.J.Karande");
let svery = new College("Svery College","Pandharpur","6","Dr.B.P.Ronge");
let fabtech = new College("Fabtech College","Sangola","7","Dr.R.B.Shendage");
let newSatara = new College("NewSatara College","Korti","5","Dr.A.A.Sagade");
sinhgad.collegeDetails();
svery.collegeDetails();
fabtech.collegeDetails();
newSatara.collegeDetails();
console.log(``);

console.log(`###3. Traversing object using for in loop `);
console.log(``);
function traverseObject(value){
    for (const key in value) {
        if (Object.hasOwnProperty.call(value, key)) {
            const element = value[key];
            console.log(`${key} : ${element}`);
        }   
        
    }
}
traverseObject(sinhgad);
console.log(``);
traverseObject(svery);
console.log(``);
traverseObject(fabtech);
console.log(``);
traverseObject(newSatara);
