/* 1. Write a program that take two numbers & add them in a
new variable. Show the result in your browser. 
2. Repeat task1 for subtraction, multiplication, division &
modulus.*/

// Solution

/* var num1 = 8;
var num2 = 10;
document.write(`<h1>Sum of ${num1} and ${num2} is ${num1 + num2}</h1>`);
document.write(`<h1>Subtraction of ${num1} and ${num2} is ${num1 - num2}</h1>`);
document.write(
  `<h1>Multiplication of ${num1} and ${num2} is ${num1 * num2}</h1>`
);
document.write(`<h1>Division of ${num1} and ${num2} is ${num1 / num2}</h1>`);
document.write(`<h1>Modulus of ${num1} and ${num2} is ${num1 % num2}</h1>`); */

/* 3. Do the following using JS Mathematic Expressions
a. Declare a variable.
b. Show the value of variable in your browser like “Value
after variable declaration is: ??”.
c. Initialize the variable with some number.
d. Show the value of variable in your browser like “Initial
value: 5”.
e. Increment the variable.
f. Show the value of variable in your browser like “Value
after increment is: 6”.
g. Add 7 to the variable.
h. Show the value of variable in your browser like “Value

MATH EXPRESSIONS | JAVASCRIPT

Page 2 of 9

after addition is: 13”.
i. Decrement the variable.
j. Show the value of variable in your browser like “Value
after decrement is: 12”.
k. Show the remainder after dividing the variable’s value */

/* // a. Declare a variable.
var myVariable;

// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
document.write("Value after variable declaration is: " + myVariable + "<br>");

// c. Initialize the variable with some number.
myVariable = 5;

// d. Show the value of variable in your browser like “Initial value: 5”.
document.write("Initial value: " + myVariable + "<br>");

// e. Increment the variable.
myVariable++;

// f. Show the value of variable in your browser like “Value after increment is: 6”.
document.write("Value after increment is: " + myVariable + "<br>");

// g. Add 7 to the variable.
myVariable += 7;

// h. Show the value of variable in your browser like “Value after addition is: 13”.
document.write("Value after addition is: " + myVariable + "<br>");

// i. Decrement the variable.
myVariable--;

// j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.write("Value after decrement is: " + myVariable + "<br>");

// k. Show the remainder after dividing the variable’s value.
var remainder = myVariable % 3;
document.write("Remainder after dividing the variable's value by 3 is: " + remainder + "<br>"); 

// l. Output : “The remainder is : 0”.
var remainder = myVariable % 3;
document.write("The remainder is: " + remainder + "<br>");*/

/* 4. Cost of one movie ticket is 600 PKR. Write a script to
store
ticket price in a variable & calculate the cost of buying 5
tickets
to a movie. Example output: */

// Solution

/* var ticketPrice = 600;
var ticketQuantity = 5;
var totalTicketPrice = ticketPrice * ticketQuantity;
document.write(
  `<h1>Total cost to buy ${ticketQuantity} tickets to a moive is ${totalTicketPrice} PKR</h1>`
); */

/* 5. Write a script to display multiplication table of any
number in your browser. */

// Solution

/* var userInput = +prompt("Enter your any number to generate table");
console.log(userInput);
document.write(`<h1>Table of ${userInput}</h1>`);
document.write(`<h3>${userInput} X 1 = ${userInput * 1}</h3>`);
document.write(`<h3>${userInput} X 2 = ${userInput * 2}</h3>`);
document.write(`<h3>${userInput} X 3 = ${userInput * 3}</h3>`);
document.write(`<h3>${userInput} X 4 = ${userInput * 4}</h3>`);
document.write(`<h3>${userInput} X 5 = ${userInput * 5}</h3>`);
document.write(`<h3>${userInput} X 6 = ${userInput * 6}</h3>`);
document.write(`<h3>${userInput} X 7 = ${userInput * 7}</h3>`);
document.write(`<h3>${userInput} X 8 = ${userInput * 8}</h3>`);
document.write(`<h3>${userInput} X 9 = ${userInput * 9}</h3>`);
document.write(`<h3>${userInput} X 10 = ${userInput * 10}</h3>`); */

/* 6. The Temperature Converter: It’s hot out! Let’s make a
converter based on the steps here.
a. Store a Celsius temperature into a variable.
b. Convert it to Fahrenheit & output “NNoC is NNoF”.
c. Now store a Fahrenheit temperature into a variable.
d. Convert it to Celsius & output “NNoF is NNoC”.

Conversion Formulae:
C = (F - 32) x 5 / 9
F = (C x 9 / 5) + 32*/

/* // a. Store a Celsius temperature into a variable.
var celsiusTemperature = 30;

// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F<br>");

// c. Now store a Fahrenheit temperature into a variable.
var fahrenheitTemperature2 = 86;

// d. Convert it to Celsius & output “NNoF is NNoC”.
var celsiusTemperature2 = (fahrenheitTemperature2 - 32) * 5/9;
document.write(fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + "°C<br>"); */

/* 7. Write a program to implement checkout process of a
shopping cart system for an e-commerce website. Store
the following in variables

a. Price of item 1
b. Price of item 2
c. Ordered quantity of item 1
d. Ordered Quantity of item 2
e. Shipping charges

Compute the total cost & show the receipt in your browser. */

// Solution

/* var priceItem1 = 650;
var priceItem2 = 100;
var itemQuantity1 = 3;
var itemQuantity2 = 7;
var shippingCharges = 100;

document.write(`<h3>Price of item 1 is ${priceItem1}</h3>`);
document.write(`<h3>Quantity of item 1 is ${itemQuantity1}</h3>`);
document.write(`<h3>Price of item 2 is ${priceItem2}`);
document.write(`<h3>Quantity of item 2 is ${itemQuantity2}</h3>`);
document.write(`<h3>Shipping charges ${shippingCharges}</h3>`);
document.write(
  `<h3>Total Cost of your order ${
    priceItem1 * itemQuantity1 + priceItem2 * itemQuantity2
  }</h3>`
); */

/* 8. Store total marks & marks obtained by a student in 2
variables. Compute the percentage & show the result in
your browser */

/* var totalMarks = 1100;
var obtainedMarks = 735;
var percentage = (obtainedMarks / totalMarks) * 100;
document.write(`<h1>Total Marks: ${totalMarks}</h1>`);
document.write(`<h1>Obtained Marks: ${obtainedMarks}</h1>`);
document.write(`<h1>Percentage: ${Math.trunc(percentage)}</h1>`); */

/* var dollar = 10;
var pakDollar = 278;
var riyal = 25;
var pakRiyal = 78;

document.write(`<h1>Currency in PKR</h1>`);
document.write(
  `<h3>${dollar} US Dollar amount in pakistan = ${dollar * pakDollar} PKR</h3>`
);
document.write(
  `<h3>${riyal} Saudi Riyal amount in pakistan = ${riyal * pakRiyal} PKR</h3>`
);
document.write(
  `<h3>Total Currency in PKR = ${riyal * pakRiyal + dollar * pakDollar}</h3>`
); */

/* 10. Write a program to initialize a variable with some
number and do arithmetic in following sequence:
a. Add 5
b. Multiply by 10
c. Divide the result by 2
Perform all calculations in a single expression */

// Solution

// var number = 29;
// document.write(`<h1>${number + 5}</h1>`);
// document.write(`<h1>${number - 10}</h1>`);
// document.write(`<h1>${number / 2}</h1>`);

/*
 11. The Age Calculator: Forgot how old someone is?
Calculate it!
a. Store the current year in a variable.
b. Store their birth year in a variable.
c. Calculate their 2 possible ages based on the stored
values.

Output them to the screen like so: “They are either NN or NN
years old”. 
*/

// Solution

/* var currentYear = 2024;
var birthYear = 2014;
var age = currentYear - birthYear;
document.write(`<h1>Current Year: ${currentYear}</h1>`);
document.write(`<h1>Birth Year: ${birthYear}</h1>`);
document.write(`<h1>Your Age is: ${age}</h1>`); */