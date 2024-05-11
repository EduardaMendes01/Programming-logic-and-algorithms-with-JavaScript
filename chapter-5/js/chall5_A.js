const frm = document.querySelector("form");
const answ = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const fruit = frm.inFruit.value
    const num = Number(frm.inNumber.value)
    let numFr = ""
    for (let i = 1; i <= num; i++) {
        numFr += fruit + "*"
    }
    numFr = numFr.slice(0, -1)
    answ.innerText = numFr
});
