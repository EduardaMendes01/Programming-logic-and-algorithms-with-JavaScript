//
const frm = document.querySelector("form")
const answ = document.querySelector("h3")

//
frm.addEventListener("submit", (e) => {
    const name = document.querySelector("#inName").value
    answ.innerText = `Hello ${name}`

    e.preventDefault()
})