// Usage: Use nested conditional statements

// Begin your application by creating a variable called coinFlip and set it equal to a random number. 
// You will have to use a Math method to get this number:

// let randomNum = Math.round(Math.random())

// Prompt the user to select “Heads or Tails” and set the result to a new variable called choice.

// Use a conditional to check the result of the coin flip. If it’s less than a certain number, it will be heads. 
//If it’s greater than a certain number, it will be tails.

// If the result is heads and the user selects heads, display the following message within an alert:
// The flip was heads and you chose heads...you win!

// If the result is heads and the user selects tails, display the following message within an alert:
// The flip was heads but you chose tails...you lose!

// If the result is tails and the user selects heads, display the following message within an alert:
// The flip was tails but you chose heads...you lose!

// If the result is tails and the user selects tails, display the following message within an alert:
// The flip was tails and you chose tails...you win!

let randomNum = Math.round(Math.random())
let choice = prompt("Heads or Tails")

document.write(`Your random number result is ${randomNum}<br>`)
if (randomNum < 0.5) {
    //document.write("Random number is heads<br>")
    if (choice == "Heads") {
        // random pick is heads and you choose heads
        alert("The flip was heads and you choose heads...you win!<br>")
    } else {

        // random pick is heads and you choose tails
        alert("The flip was heads and you choose tails...you lose!<br>")
    }

} else {
    //document.write("Random number is tails")
    if (choice == "Tails") {
        // random pick is tails and you choose tails
        alert("The flip was tails and you choose tails...you win!<br>")

    } else {
        // random pick is tails you choose heads
        alert("The flip was tails and you choose heads...you lose!<br>")

    }
}