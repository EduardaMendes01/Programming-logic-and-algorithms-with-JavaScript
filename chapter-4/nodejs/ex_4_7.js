//Fishing program
const prompt = require("prompt-sync")()
const people = Number(prompt("N of people: "))
const fish = Number(prompt("N of fish: "))
let pay 
if (fish <= people){
    pay = people * 20
} else {
    pay = (people * 20) + ((fish - people) * 12)
}
console.log(`Pay $: ${pay.toFixed(2)}`)