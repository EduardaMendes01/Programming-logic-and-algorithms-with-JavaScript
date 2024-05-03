//
const frm = document.querySelector("form")
const answ = document.querySelector("h3")
//
frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const timeBrazil = Number(frm.brazilTime.value)
    let timeFrance = timeBrazil + 5 
    if (timeFrance > 24){
        timeFrance = timeFrance - 24
    }

    answ.innerText = `Time in France ${timeFrance.toFixed(2)}`
})