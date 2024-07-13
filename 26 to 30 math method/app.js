
// // // Q1) Write a program that takes a positive integer from user & display the following in your browser.
 
// let number = +prompt('Enter any Number');

// // // a. number

// document.write(`Number : ${number}<br>`);

// // // b. round off value of the number 

// document.write(`Round off value : ${Math.round(number)}<br>`);

// // // c. floor value of the number 

// document.write(`Floor value : ${Math.floor(number)}<br>`);

// // // d. ceil value of the number 

// document.write(`Ceil value : ${Math.ceil(number)}`);

// // // Q2)  Write a program that takes a negative floating point number from user & display the following in your browser. 

let negNumber = +prompt('Enter Negative Floating Number');

// a number
document.write(`Number : ${negNumber}<br>`);

//  b. round off value of the number 

document.write(`Round off value : ${Math.round(negNumber)}<br>`);

// // // c. floor value of the number 

document.write(`Floor value : ${Math.floor(negNumber)}<br>`);

// // // d. ceil value of the number

document.write(`Ceil value : ${Math.ceil(negNumber)}`);

// // // Q3) Write a program that displays the absolute value of a number. 
//  E.g. absolute value of -4 is 4 & absolute value of 5 is 5 

let num = +prompt('Enter any Number to get their absolute value');

document.write(Math.abs(num));

// // // Q4) Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.

let randomDiceNum = Math.random() * 7;

let convertToCeil = Math.ceil(randomDiceNum);

document.write(`Random Dice Value : ${convertToCeil}`);


// // // Q5) Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser
 
let game = ["head", "tail"];

let gen = Math.random() * game.length;

let convertToFloor = Math.floor(gen);

document.write(`${convertToFloor}<br>`);

let gettingGame = game[convertToFloor];

document.write(`Random Coin Value : ${gettingGame}`);

// // // Q6) Write a program that shows a random number between 1 and 100 in your browser.

document.write('Random number between 1 and 100 :' + Math.ceil(Math.random()*100));

// // // Q7) Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. 
// // // Possible user inputs can be: 
// a. 50 
// b. 50kgs 
// c. 50.2kgs 
// d. 50.2kilograms



// // // Q8) Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.
 
let randSecretNum = Math.ceil(Math.random()*10);
 
let userInput = +prompt('Enter a number between 1 and 10');

if (userInput === randSecretNum) {
    Swal.fire({
        icon: "success",
        title: "You Guessed it Right!",
    });
}
else {
    Swal.fire({
        icon: "error",
        title: "You Guessed it Wrong!",
    });
}
