
console.log(`###1.`);
const arrayNums = [20, 3, 4, 56,90, 400, 49];
console.log(`Given Array: `);
console.log(arrayNums);
let arrayFirst = arrayNums;
arrayFirst.push(55,66);
console.log(`After shallow clone, Original Array is: `);
console.log(arrayNums);
console.log(`After shallow clone, Cloned Array is: `);
console.log(arrayFirst);
console.log(``);

console.log(`###2. `);
console.log(`After deep clone, Original Array is: `);
console.log(arrayNums);
let arraySecond = [...arrayNums];
arraySecond.push(10,25);
console.log(`After deep clone, Cloned Array is: `);
console.log(arraySecond);
console.log(``);

console.log(`###3. `);
const arrayEven =[2, 30, 14, 8];
console.log(`Given other array is: `);
console.log(arrayEven);
let mergedArray = [ ...arrayEven,...arrayNums];
console.log(`Array after merged with arrayOfNums `);
console.log(mergedArray);
console.log(``);

console.log(`###4. `);
const employee_info ={
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july_month: "40,0000INR",
        aug_month: "50,000INR",
        jun_month: "65,0000INR"
    },
    address: {
        locality: {
            colony: "OM Vrindavan Society",
            street: "Kanch Pokali, 431202",
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    },
    mobiles: ["+91 8688 3456 88", "1800- 4567 32", "+91-9096 5678 77"]
}
console.log(`a.`);
let colony = employee_info.address.locality.colony;
let street = employee_info.address.locality.street;
let city = employee_info.address.city;
let state = employee_info.address.state;
let country = employee_info.address.country;
console.log(`${employee_info.emp_name}'s Address is: ${colony}, ${street}, ${city}, ${state}, ${country}`);
console.log(``);

console.log(`b.`);
let mobile = employee_info. mobiles;
console.log(`${employee_info.emp_name}'s Mobile Numbers are: ${ mobile}`);
console.log(``);

console.log(`###6. `);

console.log(``);

// let julySal = employee_info.salary.july_month;
// console.log(`${employee_info.emp_name}'s 'jult_month' salary is: ${julySal}`);

// let upJulySal = employee_info.salary.july_month = "80K";
// console.log(`${employee_info.emp_name}'s updated salary of 'july_month' is: ${upJulySal}`);
// console.log(``);

// console.log(`${employee_info.emp_name}'s country is: ${country}`);
// let upCountry = employee_info.address.country = "United Kingdom";
// console.log(`${employee_info.emp_name}'s updated country is: ${upCountry}`);


console.log(`6]. Performing deep copy using JSON.stringfy()....`);
console.log(`--> a. Before updating july month salary is:-->`,employee_info.salary);
let newemployee_info = JSON.parse(JSON.stringify(employee_info));
newemployee_info.salary.july_month = "80,0000INR";
console.log(`--> a. After updating july month salary is:-->`,newemployee_info.salary);