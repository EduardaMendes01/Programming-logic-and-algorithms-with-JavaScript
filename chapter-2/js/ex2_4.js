//
const frm = document.querySelector("form");
const answ = document.querySelector("h3");

//
frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const kilo = Number(frm.inKilo.value);
    const consu = Number(frm.inConsumption.value);

    const price = (kilo / 1000) * consu; 
    answ.innerText = `Amount to pay: ${price.toFixed(2)}`; 
});
