//
const frm = document.querySelector("form")
const answ = document.querySelector("h3")
//
frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const number = Number(frm.inNumber.value)
    let answer = `Between ${number} and 1: `
    for(let i = number; i > 0; i = i - 1){
        answer = answer + i + ","
    }

    answ.innerText = answer
})