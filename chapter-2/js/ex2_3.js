//
const frm = document.querySelector("form")
const answ1 = document.querySelector("#outAnsw1")
const answ2 = document.querySelector("#outAnsw2")
const answ3 = document.querySelector("#outAnsw3")

//

frm.addEventListener("submit", (e) => {
    const vehicle = frm.inVehicle.value
    const price  = Number(frm.inPrice.value)

    const dowPaym = price * 0.50
    const insta = (price * 0.50) / 12

    answ1.innerText = `Sale: ${vehicle}`
    answ2.innerText = `Down payment of ${dowPaym.toFixed(2)}$`
    answ3.innerText = `+ 12x of ${insta.toFixed(2)}$`

    e.preventDefault()
})