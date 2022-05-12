let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("enter a valid number!"));
}
const tnum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your First guess"));
let attempt = 1;

while (parseInt(guess) !== tnum) {
    if (guess == 'q') { break };
    attempt++;
    if (guess > tnum) {
        guess = parseInt(prompt("Too High! Enter a new guess:"));
    }
    else {
        guess = parseInt(prompt("Too low! Enter a new guess:"));
    }
}
if (guess == 'q') {
    console.log("Ok, You Quit!");
}
else {
    console.log("Congrats You Win!");
    console.log(`You got it! It took you ${attempt} guesses`);
}