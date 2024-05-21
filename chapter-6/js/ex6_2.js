const frm = document.querySelector("form")
const answErros = document.querySelector("#outErros")
const answChances = document.querySelector("#outChances")
const answHint = document.querySelector("#outHint")

const erros = []
const raffled = Math.floor(Math.random() * 100) + 1
const CHANCES = 6

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const number = Number(frm.inNumber.value)
    if(number === raffled){
        answHint.innerText = `Congratulations!! Drawn number: ${raffled}`
        frm.inSubmit.disabled = true
        frm.inNew.className = "Displays"
    } else {
        if(erros.includes(number)){
            alert(`You already bet on the number ${number}. Try another one...`)
        } else {
            erros.push(number)
            const numErros = erros.length
            const numChances = CHANCES - numErros

            answErros.innerText = `${numErros} (${erros.join(", ")})`
            answChances.innerText = numChances

            if(numChances == 0){
                alert("You chances are over...")
                frm.inSubmit.disabled = true
                frm.inNew.className = "Displays"
                answHint.innerText = `Game Over!! Number Raffled: ${raffled}`
            } else {
                const hint = number < raffled ? "bigger" : "lower"
                answHint.innerText = `Hint: Try an number ${hint} that ${number}`
            }
        }
    }
    frm.inNumber.value = ""
    frm.inNumber.focus()
})
frm.inNew.addEventListener("click", () =>{
    location.reload()
})