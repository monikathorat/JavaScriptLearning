let num = 15;
let  n1 =0, n2 = 1;
let nextNum;
console.log(n1);
console.log(n2);
for (let index = 0; index < 8; index++) {
    nextNum = n1 + n2;
    n1 = n2;
    n2 = nextNum;
    console.log(nextNum);
    
}



