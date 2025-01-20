// Mathematical and relational operators 

// + , - , * , / , % , **

// var num = 5

// var mod = num % 2

// console.log( mod)

// boolean => true and false

// console.log(typeof true)

// > , < , =

  // console.log(1 == 1) // in this we are only checking value
  // console.log( 1 === '1') // in here we're checking both value and datatype

// type coercion and concatination (+)
// var random = "hello" - 1
// random = true + "10"
// console.log(random)

// concatination => + and ""

// var random2 = true + 10
// random2 = random2 * false
// random2 = "10" * 10

// console.log(true < 10)

// var num = 12
// var num3 = "12"

// console.log(num >= num3)

// console.log(!)   => not operator

// console.log(num !== num3)


// If a condition is true => run the code else we won't run the code

// let a = 10

// let b = "10"

// console.log(a === b)

// if(4%2){
//   console.log("running1")
// }
// else{
//   console.log("upar wala false hai")
// }

// if(false){
//   console.log("running2")
// }

// if(true){
//   console.log("running3")
// }

// if(true){
//   console.log("running4")
// }

// let balance = 1000;

// let withdraw = 1000;

// if(balance >= withdraw){
//   console.log("you can get money")
// }else{
//   console.log("Insuffiecent funds")
// }

// let age = 17 ; 


// if(age >= 18){
//   console.log("you can vote")
// }else{
//   console.log("can't vote")
// }

// // grading system => 100 - 80 (a ) , 80 - 60(b) , 60-50(c) , 50 - 40 (d)

// let score = 60

// if(score >= 80){
//   console.log("A")
// }
// else if(score >= 60){
//   console.log("B")
// }
// else if(score >= 50){
//   console.log("C")
// }
// else {
//   console.log("D")
// }

// == = >only checks value
// === > value + datatype

// // login system 

// let dbUser = "ritesh"
// let dbPass = "ritesh123"

// let user = "ritesh"
// let pass = "ritesh13"

// if(dbUser === user){
//   if(dbPass == pass){
//     console.log("Welcome")
//   }else{
//     console.log("password is wrong")
//   }
// }
// else{
//   console.log("username is wrong")
// }
// nesting in coding

// bill and discount system => bill > 2000 => 15% , bill > 3000 => 20% , >4000 => 30%



// let percent = 1500 * 15/100

// console.log(1500 - percent)
// let bill = 3560;

// if(bill>= 4000){
  
//   let discount = bill * 30/100
//   let finalPrice = bill - discount
//   console.log("you have availed 30% discount , final price" + " " + finalPrice )
  
// }else if(bill >= 3000){
  
//   let discount = bill * 20/100
//   let finalPrice = bill - discount
//   console.log("you have availed 20% discount , final price" + " " + finalPrice )
  
// }else{
//   console.log("no discount availed")
// }

// let time = 13;

// if(time < 12){
//   console.log("good morning")
// }else if (time > 12 ){
//   console.log("good afternoon")
// }else if (time < 20){
//   console.log("good evening")
// }else{
//   console.log("good night")
// }

// let str1 = "string"

// let str2 = "sPiDerMan"
// str1 = str1.toUpperCase()  // to convert the string into CAPITAL
// str1 = str1.toLowerCase()  // to convert the string into lowercase

// console.log(str1)

// inbuilt functions in js => typeof

// let age = 17;

// if(age>=18){
//   console.log("You Can Vote")
// }else{
//   console.log("Can't Vote")
// }

// let cash = 1500;
// let widraw = 1000;

// if(cash >= widraw){
//   console.log("Take Money")
// }else{
//   console.log("Insufficient Balance")
// }

// let student = 40

// if(student>=80){
//   console.log("A+")
// }if(student>=60){
//   console.log("B")
// }else{
//   console.log("fail")
// }

let a = 20;
let b = 30;

console.log(a<b);
console.log(a>b);