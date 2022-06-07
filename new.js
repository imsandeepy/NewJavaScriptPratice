// let dob=12;
// dob=50;
// console.log(dob);
// let a = 5;
// console.log(a);
// let EnterName="sby";
// console.log(EnterName);
// EnterName="bry";     /* this way we can change the value of variable */
// console.log(EnterName);
let count = 1;
count = 2;
console.log(count); /* change the value of variable see the above two lines*/

const mobile = 9022221076;
console.log(mobile);
// const mobile = 9022221078;
// console.log(mobile);
let a = 4;
let b = "bill";
let c = `mark`;
// string can be written in single quote'' ,double quote"" or back tick``
let d = "hii",
  e = "hello",
  f = `hello world`;
console.log(d);
document.write(e);
console.log(f);
document.write(b);
document.write(a);
document.write(c);



// let same="25";
// let same=25;
// console.log(same);
// VARIBALES ARE CASE-SENSITIVE
// ONLY STRING ARE WRITTEN IN '',""OR ``
// IF U WRITE NUMBER IN '',"" OR `` THEN IT WILL TAKE AS A STRING.
// U CANNOT USE REVERSE KEYWORD AS A VARIABLES IN JS
// VARIABLES CAN BE ONLY WRITTEN BY USING A LETTER OR AN UNDERSCORE_ OR AN DOLLAR SIGN&

// ------------------------------------

// ------------DATA TYPES IN JS--------
// 1.Primitive data types (unmutable)
// 2.Non-Primitive data type (mutable)

console.log(typeof a);
console.log(typeof b);
document.write(typeof e.length);
document.write(typeof a);
console.log(e.length);
console.log(f.length);
console.log(typeof f);

// EXAMPLE:-
let num1 = 10,
  num2 = "10";
console.log(num1 + num2);
console.log(50 - "4"); /* see this example number is minus by string */
console.log("" + "");
console.log("" + 0);
console.log(
  true + true
); /* IN JS 1-> REPRESENT TRUE AND 0 -> REPRESENT FALSE */

console.log(false + false);

console.log(
  "sandeep" - "yadav"
); /*output show NaN means Not a Number when u try to minus one string with another*/

console.log(false + true);
console.log(true + false);
console.log(false - true);

// *-> NULL VS UNDEFINED
// EXAMPLE OF NULL
let name = null;
console.log(name);
console.log(typeof name);

// EXAMPLE OF UNDEFINED
let surname; /* when u dont assign any value */
console.log(surname);
console.log(typeof surname);

// ----------use of NaN ---------
let mobileNo = 9022228298;
let firstname = "sandeep";
console.log(mobileNo);
console.log(firstname);

/* NaN is used for validate to check only number can be add to number feild bu using isNaN method*/

// how to use isNaN method
console.log(isNaN(mobileNo));
console.log(isNaN(firstname));

// -----------------------------------------------
// ----------------OPERATORS AND EXPRESSIONS-----

console.log(5 * 20); /* 5 ->operand / + -> operator */

// TYPES OF OPERATOR IN JS :-
// 1.ASSIGNMENT OPERATOR -> =
// 2.ARITHMETIC OPERATOR -> +-*/ % (modulus is use for remainder)
// INCREAMENT & DECREAMENT OPERATOR -> ++ ,--
// 3.COMPARISON OPERATOR -> > < <= >= ===
// 4.LOGICAL OPERATOR -> & ||
// 5.STRING OPERATOR
// 6.CONDITIONAL (TERNARY OPERATOR)

let x = 5,
  y = 5;
console.log("value of x and y is equal or not " + x == y);
console.log(x == y);

// -------INCREAMENT OPERATOR-----------

let num4 = 10;
let num3 = num4++;
console.log(num4);
console.log(num2);
console.log(num3);
let num5 = 10;
console.log(num5);

const login_button = "document.querySelector(";

// ARRAY
// let sbyarray = ["sby", "bry", "sfg"];
// console.log(sbyarray);
// console.log(sbyarray[2]); /*this way we can access element of array*/

let anyvariablename = [
  12, 20, 20, 45, 56,
]; /* array store multiple value but with same data type */
console.log(anyvariablename[3]);


let sbyarray=(1,'2',3,3);
console.log(sby)

//OBJECTS     / OBJECT  can store anything
/*EVERYTHING IS IN JS IS OBJECT AND STORED IN VARIABLE KEEP THIS  IN MIND */

let item = { name: "sby", age: "27", mobile: 9022221076 };
console.log(item);
console.log(item.mobile); /* to access elements of object*/
console.log(item.age);

let gates;
console.log(gates);

// -----------------------------------

// --------------------CONDITION---------------
// if  statement example
// --------
// let age=24;
// if(age==24){
//   alert("u r eligible");
// }
// ---------

// const number = prompt("enter number");
// if (number > 0) {
//   alert("number is positive");
// }

// if.... else EXAMPLE:-

// let icecream="chocolate";
// if(icecream==="chocolate"){
//   alert("yes this is chocclate");}
//   else{
//     alert("ohh no");
//   }

// let pen = "ballpen";
// if(pen=="ballpen"){
//   alert("yes pen is ball pen")}
//   else{
//     alert("ohoh wrong pen");
//   }
 
    //  ------------
    
// let code = prompt("Enter code to login");
// if (code === 0000) {
//   alert("Login Successfully");
// } else {
//   alert("Code is wrong Try Again");
// }

// -----------

// let pwd =prompt("Enter positive value to proceed");
// if(pwd>0){
//   alert("login successfully");
// }else{
//   alert("FAILED ! TRY AGAIN "); 
// }
  

// -----------
// IF ELSE IF CONDITION 

/*
let age=prompt("enter your age");
if(age>=18){
  alert("eligible");
}if else(age<18){
  alert("Not eligible");
}else{
alert("enter valid value")
}     

*/

/*
let time;
if (time < 12) {
  console.log("good morning");
}else if(time <14){
  console.log("good afternoon");
}else{
  console.log("good morning");
}
*/

// ------------
/*
let time=prompt("enter time");
if(time < 12){
  alert("good moring");
}else if(time < 14){
  alert("good afternoon");
}else if(time < 18){
  alert("good evening");
} 
      */