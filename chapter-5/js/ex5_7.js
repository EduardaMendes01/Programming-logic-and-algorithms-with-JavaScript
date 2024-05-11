const frm = document.querySelector("form")
const answ = document.querySelector("#outSpace")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const num = Number(frm.inNumber.value)
    let stars = ''
    for(let i = 1; i <= num; i++){
        if(i % 2 == 1){
            stars = stars + "*"
        }else {
            stars = stars + "-"
        }
    }
    answ.innerText = stars
})