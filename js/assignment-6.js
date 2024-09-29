/* 1. Write a program to take a number in a variable, do the
required arithmetic to display the following result in your
browser: */

/* var a = 10;        
document.write(<h1>Results</h1>);
document.write(<p>The value of a is: ${a}</p>);
document.write(<b>---------------------------</b>);

document.write(<p>The value of ++a is: ${++a}</p>);
document.write(<p>Now the value of a is: ${a}</p>);
document.write('<br>');
document.write(<p>The value of ++a is: ${a++}</p>);
document.write(<p>Now the value of a is: ${a}</p>);
document.write('<br>');
document.write(<p>The value of ++a is: ${--a}</p>);
document.write(<p>Now the value of a is: ${a}</p>);
document.write('<br>');
document.write(<p>The value of ++a is: ${a--}</p>);
document.write(<p>Now the value of a is: ${a}</p>); */

/* 2. What will be the output in variables a, b & result after
execution of the following script:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
Explain the output at each stage:
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--; */

/* var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
document.write(<p>a is ${a} </p>);
document.write(<p>b is ${b} </p>);
document.write(<p>Result is ${result} </p>);
// console.log(--a); // 1
// console.log(--a - --b); // 0
// console.log(--a - --b + ++b); // 0
// console.log(--a - --b + ++b + b--); // -1 */

/* 3. Write a program that takes input a name from user &
greet the user. */
/* var userInput = prompt('Enter Your Name');
document.write(Asslamualikum <b><u>${userInput}</u></b>) */

/* 5. Write a program to take input a number from user &
display it’s multiplication table on your browser. If user
does not enter a new number, multiplication table of 5
should be displayed by default. */

/* var  userNumber = +prompt('Enter a Number to generate Multiplication table');

if (userNumber == " ") {
    document.write(<h1>Table of ${5}</h1>);
    document.write(<h3>${5} X 1 = ${5 * 1}</h3>);
    document.write(<h3>${5} X 2 = ${5 * 2}</h3>);
    document.write(<h3>${5} X 3 = ${5 * 3}</h3>);
    document.write(<h3>${5} X 4 = ${5 * 4}</h3>);
    document.write(<h3>${5} X 5 = ${5 * 5}</h3>);
    document.write(<h3>${5} X 6 = ${5 * 6}</h3>);
    document.write(<h3>${5} X 7 = ${5 * 7}</h3>);
    document.write(<h3>${5} X 8 = ${5 * 8}</h3>);
    document.write(<h3>${5} X 9 = ${5 * 9}</h3>);
    document.write(<h3>${5} X 10 = ${5 * 10}</h3>);
}

document.write(<h1>Table of ${userNumber}</h1>);
document.write(<h3>${userNumber} X 1 = ${userNumber * 1}</h3>);
document.write(<h3>${userNumber} X 2 = ${userNumber * 2}</h3>);
document.write(<h3>${userNumber} X 3 = ${userNumber * 3}</h3>);
document.write(<h3>${userNumber} X 4 = ${userNumber * 4}</h3>);
document.write(<h3>${userNumber} X 5 = ${userNumber * 5}</h3>);
document.write(<h3>${userNumber} X 6 = ${userNumber * 6}</h3>);
document.write(<h3>${userNumber} X 7 = ${userNumber * 7}</h3>);
document.write(<h3>${userNumber} X 8 = ${userNumber * 8}</h3>);
document.write(<h3>${userNumber} X 9 = ${userNumber * 9}</h3>);
document.write(<h3>${userNumber} X 10 = ${userNumber * 10}</h3>); */

/* 6. Take
a) Take three subjects name from user and store them in 3
different variables.
b) Total marks for each subject is 100, store it in another
variable.
c) Take obtained marks for first subject from user and
stored it in different variable.
d) Take obtained marks for remaining 2 subjects from user
and store them in variables.
e) Now calculate total marks and percentage and show the
result in browser like this.(Hint: user table) */
var userSubjectInput1 = prompt("Enter your 1 favorite subject");
var userSubjectInput2 = prompt("Enter your 2 favorite subject");
var userSubjectInput3 = prompt("Enter your 3 favorite subject");
var obtainedMarks1 = +prompt(E`nter your ${userSubjectInput1} obtained marks`);
var obtainedMarks2 = +prompt(`Enter your ${userSubjectInput2} obtained marks`);
var obtainedMarks3 = +prompt(`Enter your ${userSubjectInput3} obtained marks`);
var totalNumber = 100;

document.write(`
<table border="1">
<tr>
<th>Subject</th> <th>Total Marks</th> <th>Obatined Marks</th> <th>Percentage</th>
</tr>
<tr>
<td>${userSubjectInput1} </td><td> ${totalNumber} </td><td> ${obtainedMarks1} </td><td> ${
  (obtainedMarks1 / totalNumber) * 100
}%</td>
</tr>
<tr>
<td>${userSubjectInput2} </td><td> ${totalNumber} </td><td> ${obtainedMarks2} </td><td> ${
  (obtainedMarks2 / totalNumber) * 100
}%</td>
</tr>
<tr>
<td>${userSubjectInput3} </td><td> ${totalNumber} </td><td> ${obtainedMarks3} </td><td> ${
  (obtainedMarks3 / totalNumber) * 100
}%</td>
</tr>
<tr>
<td></td><th> ${totalNumber * 3} </th><th> ${
  obtainedMarks3 + obtainedMarks1 + obtainedMarks2
} </th><th> ${
  (obtainedMarks1 + obtainedMarks2 + obtainedMarks3 / 300) * 100
}%</th>
</tr>
</table>`);