/* 1. Declare a variable called age & assign to it your age. Show
your age in an alert box. */
/* var age = 19;
alert("I am " + age + " years old"); */

/* 2. Declare & initialize a variable to keep track of how many
times a visitor has visited a web page. Show his/her
number of visits on your web page. For example: “You
have visited this site N times”. */

/* // Check if the visitorCount variable exists in localStorage
let visitorCount = localStorage.getItem("visitorCount");

// If visitorCount is null (first time visit), set it to 1, else increment it
visitorCount = visitorCount ? parseInt(visitorCount) + 1 : 1;

// Store the updated visitorCount in localStorage
localStorage.setItem("visitorCount", visitorCount);

// Display the visit count to the user
alert(`You have visited this site ${visitorCount} times.`); */

/* 3. Declare a variable called birthYear & assign to it your
birth year. Show the following message in your browser: */

/* var birthYear = 2004;
document.write(
  "My birth year is " +
    birthYear +
    "<br>" +
    "Data type of my decleared variable is number"
); */

/* 4. A visitor visits an online clothing store
www.xyzClothing.com . Write a script to store in variables
the following information:
a. Visitor’s name
b. Product title
c. Quantity i.e. how many products a visitor wants to
order
Show the following message in your browser: “John
Doe ordered 5 T-shirt(s) on XYZ Clothing store”. */

var visitorName = "Dua Fatima";
var productTitle = "T-shirt";
var quantity = 5;
document.write(
  "<b>" +
    visitorName +
    "</b>" +
    " ordered " +
    "" +
    "<b>" +
    quantity +
    "</b>" +
    " " +
    "<b>" +
    productTitle +
    "</b>" +
    " on xyz Cloting Store"
);