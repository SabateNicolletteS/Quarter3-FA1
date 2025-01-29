var nickname, heightInInches, weightInKg;

nickname = prompt("Enter your nickname:");
heightInInches = parseInt(prompt("Enter your height in inches:"));
weightInKg = parseFloat(prompt("Enter your weight in kg:"));

if (isNaN(heightInInches) || isNaN(weightInKg)) {
    console.log("Invalid input. Please enter numeric values for height and weight.");
} else {
    var feet = Math.floor(heightInInches / 12);
    var inches = heightInInches % 12;
    var heightFormatted = `${feet}'${inches}"`;

    var weightInLbs = (weightInKg * 2.20462).toFixed(3);

    var shareInfo = confirm("Do you agree to share your personal information?");

    if (shareInfo) {
        console.log(`Name: ${nickname}`);
        console.log(`Height: ${heightFormatted}`);
        console.log(`Weight: ${weightInLbs} lbs`);
    } else {
        console.log("User does not wish to share his/her information.");
    }

}
