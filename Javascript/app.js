// console.log("Welcome to Javascript");
//alert("This world is shit")

//-------------------VARIABLES------------------
// let a = 5;
// let b = 10;

// let c;
// c = 10;
// c = 15;

// const d = 50;
// //a = 30
// const e = 60;

// console.log(a + b);
// console.log(c);
// console.log(d);

// let firstNameStudent;
// let firstname;

//----------------------DATABASE--------------------------------
// String
// Number
// // Boolean
// // null
// // undefined
// // object
// let firstName = "Achiever";

// let isIRaining = true;

// let studentName = null;
// //let f

// const car = {
//   name: "Benz",
//   year: "2026",
// };
// console.log(typeof a);

// --------------------Arithemetic Operation---------------------
//--------------addition--------
//let a = 10;
//let b = 15

//let c = a + b;

// //-------------------------subtraction-----------------
// let d = b - a;

// //--------------------multiplication--------------
// let e = a * b;

// // ---------------------division----------------
// let f = b / a;

// //----------------------modulus-----------------
// let g = 100 % 2;

// console.log(cg);

// ----------------------Comparison Operator---------------------
// let a = "30";
// let b = 30;

// console.log(a > b);
// console.log(b > a);
// console.log(a < b);
// console.log(b < a);
// console.log(a >= b);
// console.log(a <= b);

// let c = "30";
// let d = 30;

// console.log(a === b);

// console.log(c===d);

// ---------------------Logical Operators--------------------
// -----OR------

//console.log(5 > 2 || 2 > 6 || 7 == 8);

// ----AND----

//console.log(5 > 2 && 8 > 6 && 7 == 8);

//-------NOT--------
// let light = false;
// console.log(!light);

// //--------------Conditions-----------------
// let a = prompt("Put in your first number");
// let b = prompt("Put in your second number");

// if (a > b) {
//     console.log("The first number is greater");
// }   else if (b > a) {
//     console.log("The second number is greater");
// }   else if (a == b){
//     console.log("Both numbers are equal")
// }

// let score = prompt("Input your score");

// if (isNaN(score)|| score < 0 || score > 100){
//     console.log("Invalid input! Please input a score between 0 and 100")
// }   else if (score >= 70){
//     console.log("Your grade is A");
// }   else if (score >= 60){
//     console.log("Your grade is B");
// }   else if (score >= 50){
//     console.log("Your grade is C");
// }   else if (score >= 40){
//     console.log("Your grade is D");
// }   else if (score >= 30){
//     console.log("Your grade is E");
// }   else if (score >= 0){
//     console.log("Your grade is F");
// }
// ----------------------------FUNCTION-----------------------------
// function greetUser(user = "user"){
// //  console.log("Hello" + " " + user);
// console.log(`Hello ${user}`)
// }

// greetUser("Eli");
// greetUser("Smiles");
// greetUser();

// function fullGreeting(firstName, lastName, age) {
//     console.log(`Hello ${firstName}, ${lastName}, Your are ${age} years old`);
// }

// fullGreeting("Smiles", "Cross", 17)
// let firstName = "Smiles";
// let lastName = "Cross";

// // console.log("Welcome to Class" + " " + firstName + " " + lastName);
// console.log(`Welcome to Class ${firstName} ${lastName}`);

// function addNumbers(a, b) {
//   console.log(a * b);
// }

// addNumbers(2, 5);
// addNumbers(10, 50);

// function showDay(number) {
//   switch (number) {
//     case 0:
//       console.log("Today is Sunday");
//       break;
//     case 1:
//       console.log("Today is Monday");
//       break;
//     case 2:
//       console.log("Today is Tuesday");
//       break;
//     case 3:
//       console.log("Today is Wednesday");
//       break;
//     case 4:
//       console.log("Today is Thursday");
//       break;
//     case 5:
//       console.log("Today is Friday");
//       break;
//     case 6:
//       console.log("Today is Saturday");
//     default:
//       console.log("Please input a number from 0-6");
//   }
// }

// showDay(1);

// function studentReport(MathScore, EnglishScore, JapaneseScore) {
//   const option = Number(
//     prompt(
//       "Please choose any operation. \n 1. Show total score. \n 2. Show average score \n 3. Show Grade \n 4. Exit"
//     )
//   );

//   switch (option) {
//     case 1:
//       console.log(MathScore + EnglishScore + JapaneseScore);
//       break;

//     case 2:
//       console.log((MathScore + EnglishScore + JapaneseScore) / 3);
//       break;

//     case 3:
//       let average = (MathScore + EnglishScore + JapaneseScore) / 3;
//       if (average >= 70) {
//         console.log("Your grade is A");
//       } else if (average >= 60) {
//         console.log("Your grade is B");
//       } else if (average >= 50) {
//         console.log("Your grade is C");
//       } else if (average >= 40) {
//         console.log("Your grade is D");
//       } else if (average >= 30) {
//         console.log("Your grade is E");
//       } else if (average >= 0) {
//         console.log("Your grade is F");
//       }
//       break;
//     case 4:
//       console.log("Thank you for using our student administrative application");
//       break;
//     default:
//       alert("Please put in a valid option. Try again");
//   }
// }

// studentReport(76, 98, 78);

// -----------------------String method-----------------------------
let name = "Achiever is a boss";

console.log(name.length);
console.log(name.charAt(12));
console.log(name.at(2));

console.log(name.concat(" and is the owner of Microsoft and X space"));

let text = "Grape, Pomegrante, Cherry";
console.log(text.slice(7, 17));
console.log(text.substring(0, 17));
console.log(name.toUpperCase());
console.log(name.toLowerCase());

// ------------Arrays----------------------
let student = ["Achiever, Marvellous, Anslem, Emmanuel"];
let score = [85, 56, 82, 74, "Destiny"];
