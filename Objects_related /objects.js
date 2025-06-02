// find Square numbers give by user 
// let int = require('readline-sync');
// let a = int.questionInt('Enter the value: ')
// let b = false;
// for(let i= 1; i<=a; i++){
//     if(i**2 == a){
//        b = true;
//     }
// }
// if(b){
//     console.log('yes');

// }
// else{
//     console.log('no');
// }


//------------------------------------------------------------------------------------//


// let a = 'The quick brown fox jumps over the lazy dog';

// function Pangram(a) {
//     a = a.toLowerCase();
//     let b = 'abcdefghijklmnopqrstuvwxyz';

//     for (let i = 0; i < b.length; i++) {
//         let found = false;

//         for (let j = 0; j < a.length; j++) {
//             if (b[i] === a[j]) {
//                 found = true;
//                 break;
//             }
//         }

//         if (!found) {
//             return 'NO';
//         }
//     }

//     return 'YES';
// }

// console.log(Pangram(a));

//-----------------------------------------------------------------------------------------//

// Objects practice question :
// let bhagat = {
//     name:'bantu',
//     age : 19,
//     city: 'baster',
//     school: 'navgurukul',
//     class: `10th`
// }
// bhagat.age = 20;
// delete bhagat.class
// delete bhagat.school 
// bhagat.school = 'dheli'
// // bhagat.class = `12th`
// console.log(bhagat)

//----------------------------------------------------------------------------------//

// Dot notation and Bracket notation se Object को access karna ;

// let student = {
//   name: "Bantu",
//   age: 19,
//   class: `10th`,
//   city: 'bastar',
//   school: 'navgurukul'
// };

// console.log(student.name); // Output: Bantu
// console.log(student.age);  // Output: 19
//  student.age = 20 ;
// console.log(student);


//-----------------------------------------------------------------------------------//

// Add / update / delete properties in Object ;

// let bantu = {
//     name : 'bhagat',
//     age : 19,
//     school : 'navgurukul',
//     email :'bhagat@googal.com'
// }

// console.log(bantu.age);
// bantu.class = '12th'
// bantu.passaword = 'bantu@123'
// bantu.phoneNumber = 9770584464;
// console.log(bantu);

//--------------------------------------------------------------------------------------//

// example of delet method 

// let bantu = {
//     name : 'bhagat',
//     age : 19,
//     school : 'navgurukul',
//     email :'bhagat@googal.com'
// }
// console.log(bantu);
// delete bantu.school
// console.log(bantu);

//Example of add value in Object  

// let bantu = {
//     name : 'bhagat',
//     age : 19,
//     school : 'navgurukul',
//     email :'bhagat@googal.com'
// }
// // console.log(bantu);
// bantu.phone = 9638527415;
// console.log(bantu);

//-------------------------------------------------------------------------------------//

// let student = {
//   name: "Bantu",
//   age: 19,
//   school : 'NG'
// };

// console.log(student);  // Output: Bantu


// let student = {
//   name: "Bantu",
//   greet: function() {
//     console.log("Hello, " + this.name);
//   }
// };

// student.greet();  // Output: Hello, Bantu




