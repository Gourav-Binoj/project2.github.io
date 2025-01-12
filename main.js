let cart = [];
const cartPopup = document.getElementById('cartPopup');
const cartItemsElement = document.getElementById('cartItems');
const totalAmountElement = document.getElementById('totalAmount');
const cartButton = document.querySelector('.cart-btn button');

document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const productElement = event.target.closest('.product');
        const name = productElement.getAttribute('data-name');
        const price = parseFloat(productElement.getAttribute('data-price'));

        addItemToCart(name, price);
    });
});

function addItemToCart(name, price) {
    const item = cart.find(item => item.name === name);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCartDisplay();
}

function updateCartDisplay() {
    cartItemsElement.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.name} - $${item.price} x ${item.quantity}
            <button onclick="removeItem(${index})">Remove</button>
        `;
        cartItemsElement.appendChild(li);
    });
    totalAmountElement.innerText = `Total: $${total}`;
    cartButton.innerText = `Cart (${cart.length})`;
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

function toggleCart() {
    cartPopup.style.display = cartPopup.style.display === 'flex' ? 'none' : 'flex';
}

function purchase() {
    if (cart.length > 0) {
        alert('Thank you for your purchase!');
        cart = [];
        updateCartDisplay();
        toggleCart();
    } else {
        alert('Your cart is empty!');
    }
}

document.getElementById("commentForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    var name = document.getElementById("name").value;
    var message = document.getElementById("comment").value;

    const newMessage = document.createElement("div");
    newMessage.classList.add("comment");
    newMessage.innerHTML = `
        <p><strong>${name}</strong></p>
        <p>${message}</p>
    `;

    document.getElementById("commentsList").appendChild(newMessage);
    
    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
});

document.getElementById("lo").addEventListener("click", function(e) {
    e.preventDefault();
    
    // Clear the history by replacing the current page in the history stack
    window.history.replaceState(null, null, "index.html");
    
    // Redirect to login page
    window.location.href = "index.html";
});
