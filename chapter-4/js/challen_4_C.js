//
const frm = document.querySelector("form")
const answ1 = document.querySelector("h3")
//
frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const money = Number(frm.inPrice.value)
    let message
    if (money < 1.00) {
        message = "Insufficient Value";
    } else if (money >= 1.00 && money < 1.75) {
        message = `Time: 30 minutes. Change: $${(money - 1.00).toFixed(2)}`;
    } else if (money >= 1.75 && money < 3.00) {
        message = `Time: 60 minutes. Change: $${(money - 1.75).toFixed(2)}`;
    } else if (money >= 3.00) {
        message = `Time: 120 minutes. Change: $${(money - 3.00).toFixed(2)}`;
    }

    answ1.innerText = `${message}`

})
