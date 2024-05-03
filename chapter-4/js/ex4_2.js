//
const frm = document.querySelector("form")
const answ = document.querySelector("h3")
//
frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const name = frm.inName.value
    const male = frm.man.checked
    const height = Number(frm.height.value)

    let weight
    if (male == true){
        weight = 22 * Math.pow(height, 2)
    }else{
        weight = 21 * Math.pow(height, 2)
    }

    answ.innerText = `${name}, your weight ideal is ${weight.toFixed(3)}kg`
})