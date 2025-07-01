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








// let arr = [2, 3, 8, 9, 10, 15];
// let count = 0;
// let a = [];

// for (let i = 0; i < arr.length; i++) {
//   count++;

//   if (count == 2) {
//     a.push(arr[i]); // 2 count ke baad index ka element
//     count = 0; // reset count
//   }
// }

// console.log("Index 2 count matched elements:", a);





// let arr = [3, 2, 5, 9, 11, 13, 15, 8, 1];
// let count = 0;
// let a = [];
// let k = 3;
// for (let i = 0; i < arr.length; i++) {
//   count++;

//   if (count == k) {
//     a.push(arr[i]);      // element store karo
//     arr[i] = 0;          // replace karo 0 se
//     count = 0;           // reset count
//   }

// }

// for (let j = 0; j < arr.length; j++) {

//   if (arr[j] == 0) {
//     continue;
//   }
//   else {
//     count++
//   }

//   if (count == k) {
//     a.push(arr[j]);     
//     arr[j] = 0;          
//     count = 0;           
//   }
// }

// for (let j = 0; j < arr.length; j++) {

//   if (arr[j] == 0) {
//     continue;
//   }
//   else {
//     count++
//   }

//   if (count == k) {
//     a.push(arr[j]);     
//     arr[j] = 0;         
//     count = 0;         
//   }
// }


// for (let j = 0; j < arr.length; j++) {

//   if (arr[j] == 0) {
//     continue;
//   }
//   else {
//     count++
//   }

//   if (count == k) {
//     a.push(arr[j]);    
//     arr[j] = 0;         
//     count = 0;           
//   }

// }

// for (let j = 0; j < arr.length; j++) {

//   if (arr[j] == 0) {
//     continue;
//   }
//   else {
//     count++
//   }

//   if (count == k) {
//     a.push(arr[j]);     
//     arr[j] = 0;        
//     count = 0;          
//   }

//   // if(count!=0){
//   //   a.push(arr[j])
//   // }

// }

// for (let j = 0; j < arr.length; j++) {

//   if (arr[j] == 0) {
//     continue;
//   }
//   else {
//     count++
//   }

//   if (count == k) {
//     a.push(arr[j]);     
//     arr[j] = 0;          
//     count = 0;           
//   }

//   if (count != 0) {
//     a.push(arr[j])
//   }

// }

// // console.log("Modified array:", arr);
// console.log("new array :", a);


// --------------------------------------------//

// let a = {
//     name: 'bantu',
//     age: 19,
//     school: 'navgurukul',
//     'class': 'module 04',
//     address: {
//         city: 'geedam',
//         pincode: 494441,
//         state: 'chhatti'
//     }

// }

// for(let i in a){
//     console.log(`${i}: ${a[i]}`);

// }








// let a = [
//     {name: 'bantu', age: 19},
//     {name: 'Rahul', age: 20},
//     {name: 'Sam', age: 18},
//     address = {
//         name: 'karan'
//     }
// ]






// let a = [10, 1, 5, 6, 8, 5, 10, 9, 8];
// let a1 = []
// for(let i = 0; i<a.length; i++){
//     let l = 0
//     for(let j = i+1; j<a.length; j++){
//         if(a[i] == a[j]){
//             a1[l] = a[j]
//             l++
//         }
//     }
// }
// console.log(a1);



// let arr = [1, 2, 3, 4, 5, 10, 54, 11, 30, 50];
// let n = arr.length;
// let t = 2
// let arr1 = []
// for(let i = 0; i<arr.length; i++){
//       arr1[i]  = arr[(i+t)%n]
    
// }
// console.log(arr1);













