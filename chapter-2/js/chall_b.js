//
function totalAmount() {
    const price = document.getElementById('price').value;
    const minutes = parseFloat(document.getElementById('usage').value);
   
    const usageTime = Math.ceil(minutes / 15);

    const totalCost = usageTime * price;

    document.querySelector("h2").innerText = `Total cost to pay: ${totalCost}`;
  
}