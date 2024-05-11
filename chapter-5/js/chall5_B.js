const frm = document.querySelector("form")
const answ = document.querySelector("pre")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const chinchillas = Number(frm.inNumber.value)
    const years = Number(frm.inYears.value)

    let answer = "";
    let currentChinchillas = chinchillas;
    for (let i = 1; i <= years; i++) {
        answer += `Year ${i}: ${currentChinchillas}\n`;
        if (i === 1) {
            currentChinchillas *= 3;
        } else {
            currentChinchillas *= 3;
        }
    }

    answ.innerText = answer;
});