//Drugstore program
const prompt = require("prompt-sync")()
const price = Number(prompt("Total purchase: "))
const aux = Math.floor(price / 20)
const instal = aux == 0 ? 1 : aux > 6 ? 6 : aux
const dowpValue = price / instal
console.log(`You can pay in ${instal} installments of $${dowpValue.toFixed(2)}`)