//
const frm = document.querySelector("form")
const answ1 = document.querySelector("h2")

//
frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const sideA = Number(frm.sideA.value)
    const sideB = Number(frm.sideB.value)
    const sideC = Number(frm.sideC.value)

    let message;

    if ((sideA + sideB > sideC) && (sideA + sideC > sideB) && (sideB + sideC > sideA)) {
        if (sideA === sideB && sideB === sideC) {
            message = "The sides form an Equilateral triangle.";
        } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
            message = "The sides form an Isosceles triangle.";
        } else {
            message = "The sides form a Scalene triangle.";
        }
    } else {
        message = "The sides do not form a triangle.";
    }

    answ1.innerText = `${message}`
})