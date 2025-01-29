var firstName, lastName, birthYear;

firstName = prompt("Enter your first name:");
lastName = prompt("Enter your last name:");
birthYear = parseInt(prompt("Enter your birth year:")); 

var currentYear = new Date().getFullYear();
var age = currentYear - birthYear;

var message = `Hello ${firstName} ${lastName}! How does it feel to be ${age} years old?`;

document.getElementById('output').innerText = message;

