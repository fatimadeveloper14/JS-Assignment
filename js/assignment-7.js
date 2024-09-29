/* 1. Write a program to take “city” name as input from user. If
user enters “Karachi”, welcome the user like this:
“Welcome to city of lights” */

/* var cityInput = prompt("Enter your city name", "Multan");
if (cityInput === "Karachi") {
  document.write(
    "<h1>" + "<mark>" + "Welcome to city of Lights" + "</mark>" + "</h1>"
  );
} */

/* 2. Write a program to take “gender” as input from user. If the
user is male, give the message: Good Morning Sir. If the
user is female, give the message: Good Morning Ma’am. */

/* var genderInput = prompt("Enter your gender", "male");
if (genderInput === "male") {
  document.write("<h1>" + "<mark>" + "Good Morning Sir" + "</mark>" + "</h1>");
}
if (genderInput === "female") {
  document.write(
    "<h1>" + "<mark>" + "Good Morning Ma'am" + "</mark>" + "</h1>"
  );
} else {
  document.write(
    "<h1>" + "<mark>" + "Your input is not correct" + "</mark>" + "</h1>"
  );
} */

/* 3. Write a program to take input color of road traffic signal
from the user & show the message according to this table:
Signal color Message
Red Must Stop
Yellow Ready to move
Green Move now */

/* var traficLight = prompt("Enter Traffic Light Color red,yellow,green");

if (traficLight === "red") {
  document.write("<h1>" + "<mark>" + "Must Stop" + "</mark>" + "</h1>");
}
if (traficLight === "yellow") {
    document.write(
        "<h1>" + "<mark>" + "Ready to move" + "</mark>" + "</h1>"
      );
}
if (traficLight === "green") {
    document.write(
        "<h1>" + "<mark>" + "Move now!" + "</mark>" + "</h1>"
      );
} */

/* 4. Write a program to take input remaining fuel in car (in
litres) from user. If the current fuel is less than 0.25litres,
show the message “Please refill the fuel in your car” */

// var carFuel = prompt(
//   "Enter your car remaining fuel (in Liter) 0 to 1",
//   "0.50 liter"
// );

// if (carFuel === "5 liter") {
//   document.write(
//     "<h1>" + "<mark>" + "Your car fuel is full" + "</mark>" + "</h1>"
//   );
// }
// if (carFuel === "1 liter") {
//   document.write(
//     "<h1>" + "<mark>" + "Your car fuel is 1 liter" + "</mark>" + "</h1>"
//   );
// }
// if (carFuel === "0.25 liter") {
//   document.write(
//     "<h1>" +
//       "<mark>" +
//       "Please refill the fuel in your car" +
//       "</mark>" +
//       "</h1>"
//   );
// }

/* 5. Run this script, & check whether alert message would be
displayed or not. Record the outputs.
a. var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

b. var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
c. var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
d. var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
e. if (true){
alert("True");
}
if (false){
alert("False");
}

f. if("car" < "cat"){
alert("car is smaller than cat");
} */

// // a part condition is true
// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// }

// // b part condition no 2 & condition no 4 is true
// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// }

// // c part
// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// }
// if (c === 13) {
//   alert("condition 2 is true");
// }
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if (c === 14) {
//   alert("condition 4 is true");
// }

// // d part condition is true
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }

// //e part true condition is true
// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }

// // f part condition is true
// if ("car" < "cat") {
//   alert("car is smaller than cat");
// }

/* 6. Write a program to take input the marks obtained in three
subjects & total marks. Compute & show the resulting
percentage on your page. Take percentage & compute
grade as per following table: */

// var obtainedMarks = +prompt("Enter your obtained marks out of total marks");
// var totalMarks = +prompt("Enter your total marks");
// var percentage = Math.trunc((obtainedMarks / totalMarks) * 100);

// document.write("<h1>" + "<mark>" + "Marks Sheet" + "</mark>" + "</h1>");
// document.write("<h1>" + "Total Marks: " + totalMarks + "</h1>");
// document.write("<h1>" + "Marks Obtained: " + obtainedMarks + "</h1>");
// document.write("<h1>" + "Percentage: " + percentage + "</h1>");

// if (percentage >= 80) {
//   document.write("<h1>" + "Grade: A-one" + "</h1>");
//   document.write("<h1>" + "Remarks: Excellent" + "</h1>");
// }
// if (percentage >= 70) {
//   document.write("<h1>" + "Grade: A" + "</h1>");
//   document.write("<h1>" + "Remarks: Good" + "</h1>");
// }
// if (percentage >= 60) {
//   document.write("<h1>" + "Grade: B" + "</h1>");
//   document.write("<h1>" + "Remarks: You need to improve" + "</h1>");
// }
// if (percentage < 60) {
//   document.write("<h1>" + "Grade: Fail" + "</h1>");
//   document.write("<h1>" + "Remarks: Sorry" + "</h1>");
// }else{
//   document.write("<h1>" + "your input data is invalid" + "</h1>");
// }

/* 7. Guess game:
Store a secret number (ranging from 1 to 10) in a variable.
Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct
answer”.
b. If the guessed number +1 is the secret number, show
“Close enough to the correct answer”. */
/* 
var userNumber = +prompt("Guess the number from 0 to 10");
var randomNumber = Math.trunc(Math.random() * 11);
console.log(randomNumber);
if (userNumber === randomNumber) {
  document.write(
    "<h1>" + "<mark>" + "Bingo! Correct answer" + "</mark>" + "</h1>"
  );
  document.write("<h1>" + "Correct Number: " + randomNumber + "</h1>");
}
if (userNumber + 1 === randomNumber) {
  document.write(
    "<h1>" +
      "<mark>" +
      "Close Enough to the correct answer" +
      "</mark>" +
      "</h1>"
  );
}
else {
  document.write(
    "<h1>" +
      "<mark>" +
      "sorry your number is not match our secret number" +
      "</mark>" +
      "</h1>"
  );
} */

/* 8. Write a program to check whether the given number is
divisible by 3. Show the message to the user if the number
is divisible by 3. */

/* var userinput = +prompt("Enter your number");
if (userinput % 3 === 0) {
  document.write(
    "<h1>" + "<mark>" + userinput + " is divisible by 3." + "</mark>" + "</h1>"
  );
} else {
  document.write(
    "<h1>" +
      "<mark>" +
      userinput +
      " is not divisible by 3." +
      "</mark>" +
      "</h1>"
  );
} */

/* 9. Write a program that checks whether the given input is an
even number or an odd number. */

/* var userinput = +prompt("Enter a number to check odd or even");
if (userinput % 2 === 0) {
  document.write(
    "<h1>" + "<mark>" + userinput + " is even number" + "</mark>" + "</h1>"
  );
} else {
  document.write(
    "<h1>" + "<mark>" + userinput + " is odd number" + "</mark>" + "</h1>"
  );
} */

/* 10. Write a program that takes temperature as input and
shows a message based on following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool.” */

/* var userTemperature = +prompt("Enter your city temperature");
if (userTemperature > 40) {
  document.write(
    "<h1>" + "<mark>" + "It is too hot outside." + "</mark>" + "</h1>"
  );
}
if (userTemperature > 30) {
  document.write(
    "<h1>" + "<mark>" + "The Weather today is Normal." + "</mark>" + "</h1>"
  );
}
if (userTemperature > 20) {
  document.write(
    "<h1>" + "<mark>" + "Today’s Weather is cool." + "</mark>" + "</h1>"
  );
}
if (userTemperature > 10) {
  document.write(
    "<h1>" + "<mark>" + "OMG! Today’s weather is so Cool." + "</mark>" + "</h1>"
  );
}
if (userTemperature > 5) {
  document.write(
    "<h1>" +
      "<mark>" +
      "OMG! Today’s weather is so so Cool ." +
      "</mark>" +
      "</h1>"
  );
} */

/* 11. Write a program to create a calculator for +,-,*, / & %
using if statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user. */

var userNumber1 = +prompt("Enter number 1 to perform simple calculation");
var userNumber2 = +prompt("Enter number 2 to perform simple calculation");
var userOperation = prompt(
  "Enter to perform which calculation such as +, -, *, /, %"
);
if (userOperation === "+") {
  document.write(
    "<h1>" +
      "<mark>" +
      userNumber1 +
      userNumber2 +
      " is your answer" +
      "</mark>" +
      "</h1>"
  );
}
if (userOperation === "-") {
  document.write(
    "<h1>" +
      "<mark>" +
      userNumber1 -
      userNumber2 +
      " is your answer" +
      "</mark>" +
      "</h1>"
  );
}
if (userOperation === "*") {
  document.write(
    "<h1>" +
      "<mark>" +
      userNumber1 *
      userNumber2 +
      " is your answer" +
      "</mark>" +
      "</h1>"
  );
}
if (userOperation === "/") {
  document.write(
    "<h1>" +
      "<mark>" +
      userNumber1 /
      userNumber2 +
      " is your answer" +
      "</mark>" +
      "</h1>"
  );
}
if (userOperation === "%") {
  document.write(
    "<h1>" +
      "<mark>" +
      userNumber1 %
      userNumber2 +
      " is your answer" +
      "</mark>" +
      "</h1>"
  );
}