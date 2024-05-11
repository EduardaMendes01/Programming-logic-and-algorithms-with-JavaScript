const frm = document.querySelector("form")
const answ1 = document.querySelector("h2")
const answ2 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const number = Number(frm.inNumber.value)

    
    let divisors = []
    let sum = 0
    for (let i = 1; i <= Math.floor(number / 2); i++) {
        if (number % i === 0) {
            divisors.push(i)
            sum += i
        }
    }

    let isPerfect = sum === number

    answ1.innerText = `Divisors: ${divisors.join(", ")}`
    answ2.innerText = `Sum of Divisors: ${sum}, Perfect Number: ${isPerfect}`
});
