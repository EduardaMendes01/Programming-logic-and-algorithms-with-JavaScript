//
function showDiscount() {
    const medication = document.getElementById('medication').value;
    const price = parseFloat(document.getElementById('price').value);
    const totalPrice = price * 2;
    const discountedPrice = Math.floor(totalPrice);

    document.querySelector("h2").innerText = `Sale on ${medication}`;
    document.querySelector("h3").innerText = `Get 2 units for just $${discountedPrice.toFixed(2)}`;
}
