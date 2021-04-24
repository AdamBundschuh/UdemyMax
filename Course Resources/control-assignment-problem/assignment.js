// array length using arrayName.length

const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randomNumberTwo = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7) {
    console.log("Greater than 0.7");
    alert("Greater than 0.7");
} else {
    alert("Not greater than 0.7");
}

let adamsNumbers = [1,23,36,48,66,78,94];

for (const numLoop of adamsNumbers) {
    console.log(numLoop);
}

console.log("-----------")

for (i = adamsNumbers.length - 1; i >= 0; i--) {
    console.log(adamsNumbers[i]);
}

console.log("-----------")
console.log(`Random Number: ${randomNumber}`);
console.log(`Random Number: ${randomNumberTwo}`);
console.log("-----------")

if(randomNumber > 0.7 && randomNumberTwo > 0.7) {
    console.log("Both numbers greater than 0.7")
} else if(randomNumber < 0.2 || randomNumberTwo < 0.2) {

    console.log("At least one number is less than 0.2");
} else {
    console.log("Neither condition is true.")
}