//
const frm = document.querySelector("form")
const answ1 = document.querySelector("#outAnsw1")
const answ2 = document.querySelector("#outAnsw2")
const answ3 = document.querySelector("#outAnsw3")
//
frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const withD = Number(frm.withdrawal.value)
    if (withD % 10 != 0){
        alert("Invalid value for available notes ($10, 50, 100)")
        frm.withdrawal.focus()
        return
    }
    const notes100 = Math.floor(withD / 100)
    let rest = withD % 100
    const notes50 = Math.floor(rest / 50)
    rest = rest % 50
    const notes10 = Math.floor(rest / 10)

    if (notes100 > 0){
        answ1.innerText = `Notes of $100: ${notes100}`
    } if (notes50 > 0){
        answ2.innerText = `Notes of $50: ${notes50}`
    } if (notes10 > 0){
        answ3.innerText = `Notes of $10: ${notes10}`
    }
})
