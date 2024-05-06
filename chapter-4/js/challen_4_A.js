//
const frm = document.querySelector("form")
const answ = document.querySelector("h3")
//

/*
frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const number = Number(frm.inNumber.value)
    if(number % 2 === 0){
        answ.innerText = `${number} is Even`
    }else{
        answ.innerText = `${number} is Odd`
    }
})
*/

//Ternary operator

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const number =  Number(frm.inNumber.value)
    const result = number % 2 === 0 ? "Even" : "Odd"
    answ.innerHTML = `${number} is ${result}`
})