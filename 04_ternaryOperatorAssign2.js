
console.log(`###1`);

function maleMarriageEligibility(gender, age, boyName) {
    var eligibiltiy =((gender == "Male") && (age >= 21)) ? `Hey ${boyName} you are eligible for marriage` : `Hey ${boyName} you are not eligible for marriage`;
    console.log(eligibiltiy);
    return eligibiltiy;
    
}
maleMarriageEligibility("Male", 25, "BillGates");
maleMarriageEligibility("Male", 17, "Steve Jobs");
console.log("");

 console.log(`###2`);

 function femaleMarriageEligibility(gender, age, girlName){
    var eligibiltiy = ((gender == "Female") && (age >= 18)) ? `Hey ${girlName} you are eligible for marriage` : `Hey ${girlName} you are not eligible for marriage`;
    console.log(eligibiltiy);
    return eligibiltiy;
 }
 femaleMarriageEligibility("Female", 16, "Jenifer");
 femaleMarriageEligibility("Female",27 , "Malinda gates");
