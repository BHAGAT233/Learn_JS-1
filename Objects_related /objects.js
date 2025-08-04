// // find Square numbers give by user 

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

// A pangram is a sentence that includes every letter of the alphabet at least once ;

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

// // Objects practice question :

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
//   'city': 'bastar',
//   school: 'navgurukul'
// };

// console.log(student.name); // Output: Bantu
// console.log(student.age);  // Output: 19
// console.log(student['class']);
// console.log(student.city);
//  student.age = 20 ;
// // console.log(student);


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

//-----------------------------------------------------------------------------------//

// Looping with for...in  in Object ;

// let student = {
//     name : 'bhagat',
//     ninename: 'bantu',
//     age : 19 ,
//     school: 'NavGrukul',
//     class: 'moduls 04',
//     city : 'geedam',
// }

// for(let i in student){
//     console.log(`${i}: ${student[i]}`);

// }

// second example of object ;

// let bantu = {
//     name: 'bhagat',
//     age: 19,
//     class: 'module 04',
//     school: 'NavGurukul',
// }

// let j  = bantu;
// for(let i in j){
//     console.log(`${i}: ${j[i]}`);

// }

// practice questions of Object ;

// let movie = {
//   title: "3 Idiots",
//   director: "Rajkumar Hirani",
//   year: 2009,
//   rating: 8.4
// };

// for(let i in movie){
//     console.log(`${i}: ${movie[i]}`);

// }

//-----------------------------------------------------------------------------------------------------//

// ✅ 5. Nested Object & Array of Objects ;

// object के अंदर object को dot या bracket से access करते हैं। ;

// let person = {
//   name: "Bantu",
//   age: 19,
//   address: {
//     city: "Bastar",
//     state: "Chhattisgarh",
//     pincode: 494001
//   }
// };

// console.log(person.address.city);      
// console.log(person.address["state"]);  


//  Array of Objects || हम array index से object तक पहुंचते हैं, फिर object की property access करते हैं।;

// let students = [
//   { name: "Bantu", age: 19 },
//   { name: "Sonu", age: 18 },
//   { name: "Ravi", age: 20 }
// ];

// console.log(students[0].age);
// console.log(students[2].name);

//-----------------------------------------------------------------------------------------//

//  Array of objects पर loop:  ;

// let NavGrukulData = [
//   { name: 'bantu', age: 19, city: 'bastar' },
//   { name: 'dhurwa', age: 20, city: 'bijapur' },
//   { name: 'sam', age: 18, city: 'dheli' },
// ];

// // console.log(NavGrukulData[0].name);
// // console.log(NavGrukulData[1].name);
// console.log(NavGrukulData[2].name, NavGrukulData[2].age, NavGrukulData[2].city);

// for(let i = 0; i<NavGrukulData.length; i++){
//     console.log(`${i} : name: ${NavGrukulData[i].name}, age: ${NavGrukulData[i].age}, city: ${NavGrukulData[i].city}`);

// }


//  Nested object में loop: ;

// let student = {
//     name: 'sam',
//     age: 19,
//     city: 'Geedam',

//     Subjects: {
//         english:'english',
//         hindi: 'hindi',
//         sceince: 'sceince',
//         totalmark: '550',
//         'prasentage': '95%'
//     }
// }

// console.log(student.Subjects['prasentage']);
// console.log(student.Subjects['totalmark']);

// for(let i in student){
//     console.log(`${i}: ${student[i]}`);

// }
// console.log('----------------------------------------------------------');

// for(let i in student.Subjects){
//     console.log(`${i}: ${student.Subjects[i]}`);

// }

// practice questions of Object:  ;

// let school = {
//   name: "Navgurukul",
//   location: "India",
//   students: [
//     {
//       name: "Bantu",
//       age: 19,
//       address: {
//         city: "Bastar",
//         state: "Chhattisgarh"
//       }
//     },
//     {
//       name: "Sonu",
//       age: 18,
//       address: {
//         city: "Raipur",
//         state: "Chhattisgarh"
//       }
//     }
//   ]
// };



// let school = {
//     name: "Navgurukul",
//     location: "India",
//     students: [
//         {
//             name: "Bantu",
//             age: 19,
//             address: {
//                 city: "Bastar",
//                 state: "Chhattisgarh"
//             }
//         },

//         {
//             name: "Sonu",
//             age: 18,
//             address: {
//                 city: "Raipur",
//                 state: "Chhattisgarh"
//             }
//         }
//     ]
// };

// for (let i = 0; i < school.students.length; i++) {
//     let student = school.students[i];
//     console.log(
//         `Student: ${student.name}, Age: ${student.age}, City: ${student.address.city}, State: ${student.address.state}`
//     );
// }


// let sam = [
//     { name: 'bantu', age: 19, city:'bastar'},
//     { name: 'chandu', age: 20, city: 'dheli' },
//     { name: 'nandu', age: 21, city: 'raipur' }
// ]

// for (let i = 0; i < sam.length; i++) {
//     console.log(`: name: ${sam[i].name}, ${sam[i].city}, ${sam[i].city}}`);

// }

//----------------------------------------------------------------------------------------//


//  Object ke Methods // Javascript me Objects Methods ke bare me study karna ;

//  Object.keys(obj) => Object की सारी keys ko ek array banata hain. ;

// let school =  {
//     name: 'bantu',
//     age: 19,
//     city: 'raipur',
// }

// console.log(Object.values(school));


// let sam = {
//     name : 'bhagat',
//     age : 19,
//     class: 'module 04',
//     school : 'Ng'
// }

// console.log(Object.keys(sam));

// Example with loop: ;

// let  studentData = {
//     name : 'bantu',
//     age: 19,
//     city: 'dheli',
//     class: 'module 04',
//     school : 'navgurukul',
// }

// let keys = Object.keys(studentData);
// for(let i = 0; i<keys.length; i++){
//     console.log(`${keys[i]}: ${studentData[keys[i]]}`);

// }

// let student = {
//   name: "Bantu",
//   age: 19,
//   course: "MERN Stack",
//   batch: "May 2025"
// };

// let N = Object.keys(student)
// console.log(N);

// for(let i = 0; i<N.length; i++){
//     console.log(`${N[i]}: ${student[N[i]]}`);

// }




// let sam = {name: 'bhagat', age: 19, city: 'geedam', class: 'module 04'}
// let sam1 = {address: 'barsur', Pincode: 494441, village: 'jawanga'}
// let sam2 = {friend: 'sachin', }
// sam.age = 20;
// delete sam.class

// console.log(Object.assign({}, sam, sam1, sam2));

//-------------------------------------------------------------------------------------------------//

// Object.values(obj) => ye maithod kisi bhi object ki sari valuais ko ek array mein nikaal kar deta hai.;

// let studentDAta = {
//     name : 'kartik',
//     age : 17,
//     city : 'geedam',
//     class: 'module 04',
//     picode: 494441,
// }

// console.log(Object.values(studentDAta)); // [ 'kartik', 17, 'geedam', 'module 04', 494441 ]

// example 02 ;

// let modulestraketr = {
//     name : 'kartik',
//     age: 17,
//     class: 'module 04',
//     housename: 'malhar',
//     course: 'MERN Stack',
// }

// let kartik = Object.values(modulestraketr)
// console.log(kartik);


// Example with loop ;

// let student = {
//     name: 'bantu',
//     age: 19,
//     city: 'Dantewada',
//     course: 'MERN Stack',
//     class: 'module 04',
//     address: 'navgurukul'
// }

// let N = Object.values(student);

// for(let i = 0; i<N.length; i++){
//     console.log(N[i]);

// }

// Example 03 ;

// let product = {
//   name: "Mobile Phone",
//   brand: "Samsung",
//   price: 14999,
//   available: true
// };

// let arr = Object.values(product);
// console.log(arr);

// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i]);

// }

//-------------------------------------------------------------------------------------------------------//

// hasOwnProperty() => ye method check karta hai ki kohi key (property) उस object ke अंदर hai ya nahi aur yah true / false return karta hain। 

// let student = {
//   name: "Bantu",
//   age: 19,
//   city: 'geedam',
// };

// console.log(student.hasOwnProperty("name"));   // true  
// console.log(student.hasOwnProperty("city")); // false

// Example 02 ;

// let student = {
//   name: "Bantu",
//   age: 19
// };

// if (student.hasOwnProperty("age")) {
//   console.log("Student ki age hai:", student.age);
// } else {
//   console.log("Student ki age nahi di gayi");
// }


//03. Array ko Object me convert karna ; 

// let arr = [1, 'Rahul', 2, 'Bhagat', 3, 'Bantu', 4, 'Kartik', 5, 'Sachin', 6, 'sam', 7, 'Ram'];

// let obj = {};

// for (let i = 0; i < arr.length; i += 2) {
//   obj[arr[i]] = arr[i + 1];
// }

// console.log(obj);

// let a = Object.assign({}, arr)
// console.log(a);


//04.  Object.entries(obj) => yeh method object ko array of [key, value] pairs main badal deta hain।;

// Example 01 =>

//   let student = {
//   name: "Bantu",
//   age: 19,
//   course: "MERN Stack",
//   adress: {
//     village: 'jawanga',
//     pincode: 494441,
//     city: 'geedam',
//     district: 'Dantewada',
//   }

// };

// console.log(Object.entries(student));

// Example with loop 

// let student = {
//   name: "Bantu",
//   age: 19,
//   course: "MERN Stack",
//   city: 'raipur',
//   village: 'Jawanga',
//   arr: [1, 2, 3, 4, 5],
//   address: {
//     name: 'bhagat',
//     class: 'module 04'
//   }
// };

// let a = Object.entries(student);

// for (let i = 0; i < a.length; i++) {

//   console.log(a[i][0] + ': ' + a[i][1]);

// }


//---------------------------------------------------------------------------------------------//


// function sum(a, b, c) {
//   return a + b + c;
// }
// const numbers = [1, 2, 3];
// console.log(sum(...numbers)); // Output: 6


//--------------------------------------------CRUD Operations----------------------;



