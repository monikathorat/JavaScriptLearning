
function leapYear(year){
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 ==0)){
        console.log(`${year} is leap year`);
    }
    else{
        console.log(`${year} is not leap year`);
    }
};
leapYear(2020);
leapYear(1996);
leapYear(2014);
leapYear(2000);