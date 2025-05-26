// let input = require('readline-sync');
// let n = input.question('Enter the value: ')
// console.log(n);
// let b = n;
// let r = 0;
// let p = 0;
// while(n!=0){
//     r = n%10;
//     p = p*10+r;
//     n = Math.floor(n/10)
// }
// if(b == p){
//     console.log('yes');

// }
// else{
//     console.log('no');

// }

// const input = require('readline-sync');

// let str = input.question('Enter a string: ');

// // Reverse string
// let reversed = str.split('').reverse().join('');


// if (str === reversed) {
//     console.log('Yes, it is a palindrome');
// } else {
//     console.log('No, it is not a palindrome');
// }


// let input = require('readline-sync');
// let N = input.question('Enter the value: ')


// let a = 1;
// let b = 10;
// let c = 1;
// // let d = 2;

// while(c<=b){
//     console.table([(`${c} x ${a} = ${a*c}:${c} x ${2} = ${2*c} : ${c} x ${3} = ${3*c} : ${c} x ${4} = ${4*c}`),]);
//     c++

// }



// let user = {
//     username: 'bhagat',
//     price: 999,

//     welcomeMesege : function (){
//         console.log(`${this.username}welcome to website`);

//     }
// }


// let input = require('readline-sync');
// let n = input.questionInt('enter the value: ')


// for (let i = 2; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${j} x ${i} = ${j * i}`);
//   }
//   console.log("----------"); // To separate each table
// }


// let a = 12;
// let b = 18;

// // Step 1: Find HCF (for LCM calculation)
// let hcf;
// for (let i = 1; i <= Math.min(a, b); i++) {
//   if (a % i === 0 && b % i === 0) {
//     hcf = i;
//   }
// }

// // Step 2: Find LCM using formula
// let lcm = (a * b) / hcf;

// console.log("LCM of", a, "and", b, "is:", lcm);


