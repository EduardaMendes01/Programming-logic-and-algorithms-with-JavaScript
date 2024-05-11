const prompt = require("prompt-sync")()
const product = prompt("Product: ")
const num = Number(prompt("N of Labels: "))
for(let i = 1; i <= num / 2; i++){
    console.log(`${product.padEnd(30)} ${product.padEnd(30)}`)
}
if(num % 2 == 1){
    console.log(product)
}