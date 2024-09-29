// 1. Declare 3 variables in one statement.
// var variable1, variable2, variable3;

// 2. Declare 5 legal & 5 illegal variable names.
// 5 legal variable
// var _legal1, leGal2, $legal3, le4gal, legalLegal5;
// 5 illegal variable
// var 1illegal, *illegal2, illegal#3, var, illegal variable5;

/* 3. Display this in your browser
a) A heading stating “Rules for naming JS variables”
b) Variable names can only contain ______, ______,
______ and ______.
For example $my_1stVariable
c) Variables must begin with a ______, ______ or
_____. For example $name, _name or name
d) Variable names are case _________
e) Variable names should not be JS _________ */

// Solution
document.write(`<h1> Rules for naming JS variables </h1>`);
document.write(
  `<p>Variable names can only contain numbers, $ and _.For example $my_1stVariable<p>`
);
document.write(
  `<p>Variables must begin with a $, _ or
    letter. For example $name, _name or name<p>`
);
document.write(`<p>Variable names are case sensitive<p>`);
document.write(`<p>Variable names should not be JS keywords<p>`);