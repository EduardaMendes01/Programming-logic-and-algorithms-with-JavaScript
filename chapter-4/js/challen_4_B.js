//
const frm = document.querySelector("form")
const answ = document.querySelector("h3")
//
frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const speedAllo = Number(frm.speedAllowed.value)
    const driverSpee = Number(frm.driverSpeed.value)
    const speedDiff = driverSpee - speedAllo
    const speedLimitThreshold = speedAllo * 0.20

    if(driverSpee <= speedAllo){
        answ.innerText = "Situation: No Fine"
    }else if(speedDiff <= speedLimitThreshold){
        answ.innerText = "Situation: Light Fine"
    }else{
        answ.innerText = "Situation: Serious Fine"
    }
})