
let str = "1215";

let strSplit = str.split('');
let strRev = strSplit.reverse();
let strJoin = strRev.join('');

if(str === strJoin){
    console.log(`${str} is palindrome`);
}else{
    console.log(`${str} is not palindrome`);
}






