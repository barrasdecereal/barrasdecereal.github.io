// Variables
let productCount = 0;
const pricePerUnit = 1500;
const productCountSpan = document.getElementById('product-count');
const totalPriceElement = document.getElementById('total-price');
const confirmationMessage = document.getElementById('confirmation');

// Update Total Price
function updateTotalPrice() {
    const totalPrice = productCount * pricePerUnit;
    totalPriceElement.textContent = `Total: $${totalPrice}`;
}

// Event listeners for +1 and -1 buttons
document.getElementById('increase').addEventListener('click', function() {
    productCount++;
    productCountSpan.textContent = productCount;
    updateTotalPrice();
});

document.getElementById('decrease').addEventListener('click', function() {
    if (productCount > 0) {
        productCount--;
        productCountSpan.textContent = productCount;
        updateTotalPrice();
    }
});

// Finalize Order Button
document.getElementById('finalize-order').addEventListener('click', function() {
    if (productCount > 0) {
        // Hide the product selection and show the confirmation message
        document.querySelector('main').classList.add('hide');
        confirmationMessage.classList.remove('hide');
    } else {
        M.toast({html: '¡Debes seleccionar al menos 1 producto!'});
    }
});
