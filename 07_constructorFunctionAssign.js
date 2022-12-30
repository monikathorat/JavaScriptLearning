
console.log(`###. Function Constructor Assignment`);
function Bank (bankName, location, ifscCode, branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
}
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";
let yesBank = new Bank("YES Bank", "Pune", "YESB00005689", 1525);
let sbiBank = new Bank("SBI Bank", "Mumbai", "SBIB00008539", 1632);
let mahBank = new Bank("MAHARASHTRA Bank", "Panvel", "MAHB00005689", 1485);
let axisBank = new Bank("AXIS Bank", "Banglore","AXIS00005482",1263);

console.log(`Bank Details are: Bank Name: ${yesBank.bankName}, Location: ${yesBank.location}, IFSC Code: ${yesBank.ifscCode}, Branch Code: ${yesBank.branchCode}`);
console.log(`Bank Details are: Bank Name: ${sbiBank.bankName}, Location: ${sbiBank.location}, IFSC Code: ${sbiBank.ifscCode}, Branch Code: ${sbiBank.branchCode}`);
console.log(`Bank Details are: Bank Name: ${mahBank.bankName}, Location: ${mahBank.location}, IFSC Code: ${mahBank.ifscCode}, Branch Code: ${mahBank.branchCode}`);
console.log(`Bank Details are: Bank Name: ${axisBank.bankName}, Location: ${axisBank.location}, IFSC Code: ${axisBank.ifscCode}, Branch Code: ${axisBank.branchCode}`);
console.log(``);

 console.log(`Open time of SBI Bank is: ${sbiBank.openTime} & Close Time is: ${sbiBank.closeTime} `);
 console.log(``);

 console.log(`Bank Name: ${axisBank.bankName} Close Time: ${axisBank.closeTime}`);
 console.log(``);
 console.log(`Bank Name: ${yesBank.bankName} Branch Code: ${yesBank.branchCode} Open Time: ${yesBank.openTime}`);

 

