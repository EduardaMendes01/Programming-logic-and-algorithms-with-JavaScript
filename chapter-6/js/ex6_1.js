const frm = document.querySelector("form")
const answName = document.querySelector("span")
const answList = document.querySelector("pre")

const pacients = []

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const name = frm.inPacient.value
    pacients.push(name)
    let list = ""
    for(let i = 0; i < pacients.length; i++){
        list += `${i + 1}. ${pacients[i]}\n`
    }
    
    answList.innerText = list
    frm.inPacient.focus()
})

frm.urgency.addEventListener("click", () =>{
    if(!frm.checkValidity()) {
        alert("Inform the name of the pacient to be attend urgently")
        frm.inPacient.focus()
        return
    }
    const name = frm.inPacient.value
    pacients.unshift(name)
    let list = ""
    pacients.forEach((pacient, i) => (list += `${i + 1}. ${pacient}\n`))
    answList.innerText = list 
    frm.inPacient.value = ""
    frm.inPacient.focus()
})

frm.attend.addEventListener("click", () =>{
    if(pacients.length == 0){
        alert("There is no pacients on the waiting list")
        frm.inPacient.focus()
        return
    }
    const attend = pacients.shift()
    answName.innerText = attend
    let list = ""
    pacients.forEach((pacient, i) => (list += `${i + 1}. ${pacient}\n`))
    answList.innerText = list
})
