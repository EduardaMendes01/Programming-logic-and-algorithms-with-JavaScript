const frm = document.querySelector("form")
const answ1 = document.querySelector("#outAnsw1")
const answ2 = document.querySelector("#outAnsw2")

let answer = ""
let numBills = 0
let amountTotal = 0

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const description = frm.inDescription.value
    const value = Number(frm.inTotal.value)

    numBills++
    amountTotal = amountTotal + value
    answer = answer + description + " - $:" + value.toFixed(2) + "\n"
    answ1.innerText = `${answer}`
    answ2.innerText = `${numBills} Bill(s) - Total $: ${amountTotal.toFixed(2)}`

    frm.inDescription.value = ""
    frm.inTotal.value = ""
    frm.inDescription.focus()
})