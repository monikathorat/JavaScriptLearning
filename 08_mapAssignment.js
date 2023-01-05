
console.log(``);
class Bank{
    constructor(bankName,location, accountNo,ifsc,interestRate){
        this.bankName = bankName;
        this.location = location;
        this.accountNo = accountNo;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
    }
}
let axisBank = new Bank("AXIS BANK","Pune",458596872315,"AXISB8569","5%")
let sbiBank = new Bank("SBI BANK","Mumbai",5986239874,"SBIB9874","6%")
let iciciBank = new Bank("ICIICI BANK","Banglore",852963456789,"ICICIB8952","6.5%")
let kotakBank = new Bank("KOTAK BANK","Surat",852398567854,"KOTAKB5623","5.5%")
let hdfcBank = new Bank("HDFC BANK","Nagpur",25639874145296,"HDFCB8912","6.5%")
let panjabBank = new Bank("PANJAB BANK","Thane",562378128963,"PANJABB9856","6%")

const mapBank = new Map();
console.log(`###. Crating Map in such way that account no as key and object as a value`);

mapBank.set(458596872315,axisBank);
mapBank.set(5986239874,sbiBank);
mapBank.set(852963456789,iciciBank);
mapBank.set(852398567854,kotakBank);
mapBank.set(25639874145296,hdfcBank);
mapBank.set(562378128963,panjabBank);
console.log(`Keys`);
const keysOfBank = mapBank.keys();
console.log(keysOfBank);


console.log(`Values`);
console.log(axisBank);
console.log(sbiBank);
console.log(iciciBank);
console.log(kotakBank);
console.log(hdfcBank);
console.log(panjabBank);
console.log(``);


console.log(`###. Traversing Map with data membars bankName, accountNo and interstRate for each object`);


for (const iterator of keysOfBank) {
    const element= mapBank.get(iterator);
    console.log(element.bankName,element.accountNo,element.interestRate);
    
}