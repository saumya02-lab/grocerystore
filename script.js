let cart = [];

// Select all 'Add to Cart' buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Get product name and price
        const productCard = this.parentElement;
        const productName = productCard.querySelector('h3').innerText;
        const productPrice = parseFloat(productCard.querySelector('.price').innerText.replace('$', ''));
        const quantity = parseInt(productCard.querySelector('.quantity').value);

        // Create a new product object
        const product = { name: productName, price: productPrice, quantity: quantity };

        // Add product to cart
        cart.push(product);

        // Update the cart display
        updateCartDisplay();
        alert(`${productName} has been added to your cart.`);
    });
});

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItemsContainer.innerHTML = ''; // Clear previous cart items

    let total = 0;
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <h3>${item.name} (x${item.quantity})</h3>
            <p>$${(item.price * item.quantity).toFixed(2)}</p>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    totalPriceElement.innerText = total.toFixed(2);
}

// Checkout button functionality
document.getElementById('checkout-btn').addEventListener('click', function() {
    if (cart.length > 0) {
        alert("Proceeding to checkout...");
        cart = []; // Clear cart after checkout
        updateCartDisplay();
    } else {
        alert("Your cart is empty!");
    }
});
