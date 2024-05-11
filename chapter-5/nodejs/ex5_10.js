const prompt = require("prompt-sync")()
const amount = Number(prompt("Total $: "))
const num = Number(prompt("Number of installments: "))
const instal = Math.floor(amount / num)
const totalF = instal + (amount % num)
for(let i = 1; i < num; i++){
    console.log(`1.${i} installment $: ${instal.toFixed(2)}`)
}
console.log(`${num} (last installment) $: ${totalF.toFixed(2)}`)