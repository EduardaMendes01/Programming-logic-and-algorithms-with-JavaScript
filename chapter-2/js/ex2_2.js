//
const frm = document.querySelector("form")
const answ1 = document.querySelector("h3")
const answ2 = document.querySelector("h4")

//
frm.addEventListener("submit", (e) => {
    const title = frm.inTitle.value
    const duration = Number(frm.inDuration.value)

    const hours = Math.floor(duration / 60)
    const minutes = duration % 60

    answ1.innerText = title
    answ2.innerText = `${hours} hour(s) and ${minutes} minute(s)`

    e.preventDefault()
})