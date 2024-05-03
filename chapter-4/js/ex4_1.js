//
const frm = document.querySelector("form")
const answ1 = document.querySelector("h3")
const answ2 = document.querySelector("h4")
//
frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const name = frm.inName.value
    const grade1 = Number(frm.firstG.value)
    const grade2 = Number(frm.secondG.value)
    const status = (grade1 + grade2) / 2
    answ1.innerText = `Grade avarage: ${status.toFixed(2)}`
    //Conditions
    if(status >= 7){
        answ2.innerText = `Congratulations ${name}, you were approved`
        answ2.style.color = "blue"
    } else{
        answ2.innerText = `Oops... ${name} you were failed`
        answ2.style.color = "red"
    }
})