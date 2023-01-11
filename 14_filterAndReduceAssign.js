

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

const array_emps = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi]

console.log(`###1. Employees from Wipro company`);
const wiproEmp = array_emps.filter((emp)=>{
    return emp.emp_company == "Wipro";
});
wiproEmp.forEach((emp)=>{
    console.log(emp.emp_name);
    console.log(emp);
});
console.log(``);

console.log(`###2. Employees from "IT" and "HR" dept`);
const ithrEmp = array_emps.filter((emp)=>{
    return emp.emp_dept == "IT" || emp.emp_dept == "HR";
});
ithrEmp.forEach((emp)=>{
    console.log(emp.emp_name,emp.emp_dept);
    console.log(emp);
});
console.log(``);

console.log(`###3. Employees whose ID is greater than 50`);
const idEmp = array_emps.filter((emp)=>{
    return emp.emp_id > 50;
});
idEmp.forEach((emp)=>{
    console.log(emp.emp_id,emp.emp_name);
    console.log(emp);
});
console.log(``);

console.log(`###4. Employees with name start with "A" or "V" or "M"`);
const avmEmp = array_emps.filter((emp)=>{
    if ((emp.emp_name.startsWith("A")) || (emp.emp_name.startsWith("V")) || (emp.emp_name.startsWith("M"))) {
        return emp.emp_name;  
    }  
});
avmEmp.forEach((emp)=>{
    console.log(emp.emp_name);
    console.log(emp);
});
console.log(``);

console.log(`###5. Average salary of employees`);
const salary = array_emps.reduce((runningTotal,value)=>{
    return runningTotal+value.emp_salary;
},0);
console.log(`Average of salary of all employees is: ${salary/array_emps.length}`);
console.log(``);

console.log(`###6. Average salary for IT department`);
const itEmp = array_emps.filter((emp)=>{
    return emp.emp_dept == "IT";
});
const avg = itEmp.reduce((runningTotal,value)=>{
    return runningTotal+value.emp_salary;
},0);
console.log(`Average salary of IT dept is: ${avg/itEmp.length}`);










    
    



