//
function sale() {
    const product = document.getElementById('product').value;
    const price = parseFloat(document.getElementById('price').value);
   
    const discount = price / 2;
    const withDiscount = (price * 2) + discount ;

    document.querySelector("h2").innerText = ` ${product} - Sale: Get 3 for ${withDiscount}`;

    document.querySelector("h3").innerText = `The third product costs only ${discount}`;
  
}