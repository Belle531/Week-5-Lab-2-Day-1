document.addEventListener('DOMContentLoaded', (event) => {
    let price = 10; 
    let quantity = 5;
    let total = price * quantity;


    const resultDiv = document.getElementById("math-result");

    if (resultDiv) { 
        resultDiv.textContent = `The total is: $${total}`;
    } else {
        console.error("Element with ID 'math-result' not found!");
    }
});