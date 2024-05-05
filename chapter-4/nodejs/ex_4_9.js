//Invert Hundred Program
const prompt = require("prompt-sync")()
const number = Number(prompt("Number (Hundred): "))
if(number < 100 || number >= 1000){
    console.log("Error... It must be a hundred!")
    return
}
const num1 = Math.floor(number / 100)
const rest = number % 100
const num2 = Math.floor(rest / 10)
const num3 = rest % 10
console.log(`Inverted: ${num3}${num2}${num1}`)