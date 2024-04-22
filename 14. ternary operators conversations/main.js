// Task 1:
var temperature = 25;
if (temperature > 30) {
    console.log("It's too hot outside!");
}
else {
    console.log("It's not too hot outside.");
}
// convert into ternary operator
temperature > 30 ? console.log("It's too hot outside!") : console.log("It's not too hot outside");
//Task 2:
var number = 7;
if (number > 30) {
    console.log("It's too high");
}
else if (number > 20) {
    console.log("It's correct");
}
else {
    console.log("number is small");
}
// converted into ternary operator
var number1 = 7;
(number1 > 30 ? console.log("It's too high") : console.log("its correct"));
console.log("number is small");
