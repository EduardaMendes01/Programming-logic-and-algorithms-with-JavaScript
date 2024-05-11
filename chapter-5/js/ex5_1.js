//
const frm = document.querySelector("form")
const answ = document.querySelector("pre")
//
frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const number = Number(frm.inNumber.value)
    let answer = ""
    for(let i = 1; i <= 10; i++){
        answer = `${answer}${number} X ${i} = ${number * i}\n `
    }

    answ.innerText = answer
})