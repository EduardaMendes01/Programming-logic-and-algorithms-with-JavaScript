const prompt = require("prompt-sync")()
const vehicle = prompt("vehicle: ")
const price = Number(prompt("price($): "))
const downPay = price * 0.50
const installments = (price * 0.50) / 12
console.log(`Sale: ${vehicle}`)
console.log(`Down payment of ($): ${downPay.toFixed(2)}`)
console.log(`+ 12x of($): ${installments.toFixed(2)}`)