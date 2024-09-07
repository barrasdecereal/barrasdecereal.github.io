// Ensure that the DOM content is fully loaded before running JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Materialize Modal
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    // Variables
    let productCount = 0;
    const pricePerUnit = 1500;
    const productCountSpan = document.getElementById('product-count');
    const totalPriceElement = document.getElementById('total-price');

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
        if (productCount === 0) {
            M.toast({html: '¡Debes seleccionar al menos 1 producto!'});
        }
    });

    // Back to Home Button in Modal
    document.getElementById('back-home').addEventListener('click', function() {
        // Reset the product count and total
        productCount = 0;
        productCountSpan.textContent = productCount;
        updateTotalPrice();
    });
});
