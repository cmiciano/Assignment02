// Usage: Use simple conditional statements

// Create an application that accepts two integers within two separate prompts.
// Then, display only the larger of the two within the browser window.
// Don’t forget to handle the fact that the two could be equal.


let int1 = prompt("Enter an integer")
let int2 = prompt("Enter another integer")

if (int1 > int2) {
    document.write("The first integer is greater<br>")
    document.write(int1)

} else if (int2 > int1) {
    document.write("The second integer is greater<br>")
    document.write(int2)
} else {
    document.write("The integers are equal<br>")
    document.write(int2)
}