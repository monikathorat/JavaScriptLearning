
let rows = 6;
let char = "";

for (let i = 1; i <= rows; i++) {
  for (let j = 0; j < i; j++) {
    char += "*";//char = char + j
    // console.log(i);
  }
  char += "\n";
}
console.log(char);

let n = 6;
let str = "";  

for (let i = n; i < n; i--) {
  for (let k = 0; k < n-1; k--) {
    str += "*";//char = char + j
    // console.log(i);
  }
  str += "\n";
}
console.log(str)