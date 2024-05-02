/* Develop a program for a veterinarian, which reads the weigh of a food in kg and how much of the food a cat consumes per day, in grams. Enter how many days the food will last and how much is left over(in grams) */

const prompt = require("prompt-sync")()
const foodKg = prompt("Weight of a food(kg): ")
const dailyIntake = prompt("Daily intake(gr): ")
const kgInGr = foodKg * 1000
const  duration = Math.floor(kgInGr / dailyIntake)
const surplus = kgInGr % dailyIntake
console.log(`Lasts ${duration} days`)
console.log(`${surplus} grams left`)
