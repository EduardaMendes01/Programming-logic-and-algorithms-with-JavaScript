const frm = document.querySelector("form")
const answ = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const num = Number(frm.inNumber.value)
    let numDividers = 0 
    for(let i = 1; i <= num; i++){
        if(num % i == 0){
            numDividers++
        }
    }
    if(numDividers == 2){
        answ.innerText = `${num} It's Prime` 
    } else{
        answ.innerText = `${num} It's not Prime`
    }
})