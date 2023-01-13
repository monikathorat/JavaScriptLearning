
console.log(``);
class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_employees = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log(`Given Employee class`);
array_employees.forEach((currentValue)=>{
    console.log(currentValue);
});
console.log(``);

console.log(`###1. Sort array by ID`);
console.log(``);
array_employees.sort((id1,id2)=>{
    return id1.emp_id > id2.emp_id ? 1 : -1;
});
array_employees.forEach((currentValue)=>{
    console.log(`ID: ${currentValue.emp_id} Name: ${currentValue.emp_name} Department: ${currentValue.emp_dept}`)
});
console.log(``);

console.log(`###2. Sort by department`);
console.log(``);
array_employees.sort((dept1,dept2)=>{
    return dept1.emp_dept > dept2.emp_dept ? 1 : -1;
});
array_employees.forEach((currentValue)=>{
    console.log(`ID: ${currentValue.emp_id} Dept: ${currentValue.emp_dept} Company: ${currentValue.emp_company}`)
});
console.log(``);

console.log(`###3. Descending order of employees by salary`);
console.log(``);
array_employees.sort((sal1,sal2)=>{
    return sal1.emp_salary > sal2.emp_salary ? -1 : 1;
});
array_employees.forEach((currentValue)=>{
    console.log(`Name: ${currentValue.emp_name} Salary: ${currentValue.emp_salary} Company: ${currentValue.emp_company}`)
});
console.log(``);