let num = 5;
let  n1 =0, n2 = 1;
let nextNum;
for (let index = 0; index < num; index++) {
    console.log(n1);
    nextNum = n1 + n2;
    n1 = n2;
    n2 = nextNum;    
}



