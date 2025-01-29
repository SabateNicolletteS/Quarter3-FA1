var nickname, heightInInches, weightInKg;

nickname = prompt("Enter your nickname:");
heightInInches = parseInt(prompt("Enter your height in inches:"));
weightInKg = parseFloat(prompt("Enter your weight in kg:"));

var feet = Math.floor(heightInInches / 12);
var inches = (heightInInches - (feet * 12));
var heightFormatted = `${feet}'${inches}"`;

var weightInLbs = (weightInKg * 2.20462).toFixed(3);

alert(`Name: ${nickname}\nHeight: ${heightFormatted}\nWeight: ${weightInLbs} lbs`);
