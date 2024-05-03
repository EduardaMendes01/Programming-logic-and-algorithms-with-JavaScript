//
const frm = document.querySelector("form")
const answ = document.querySelector("h3")
//
frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const number = Number(frm.inNumber.value)
    const square = Math.sqrt(number)
    if(Number.isInteger(square)){
        answ.innerText = `Root: ${square}`
    }else {
        answ.innerText = `There is no exact root for ${number}`
    }
})