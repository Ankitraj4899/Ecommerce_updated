const cartLink = document.querySelector("#cartLink");

if (cartLink) {
    cartLink.addEventListener("click", (event) => {

        if (localStorage.getItem("isLoggedIn") !== "true") {
            event.preventDefault();
            window.location.href = "login.html";
        }

    });
}


const cartContainer = document.querySelector("#cartContainer");

if (cartContainer) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {

        cartContainer.innerHTML = `
            <p>Your cart is empty.</p>
        `;

    } else {

        cart.forEach((product, index) => {

            const cartItem = document.createElement("div");

            cartItem.classList.add("cart_item");

            cartItem.innerHTML = `
                <img 
                    src="${product.image}" 
                    alt="${product.name}"
                >

                <div class="cart_item_info">

                    <h2>${product.name}</h2>

                    <p>${product.price}</p>

                    <p>
                        Quantity: ${product.quantity}
                    </p>

                    <button 
                        class="remove_cart_item"
                        data-index="${index}"
                    >
                        Remove
                    </button>

                </div>
            `;

            cartContainer.appendChild(cartItem);
        });


        const removeButtons = document.querySelectorAll(
            ".remove_cart_item"
        );

        removeButtons.forEach((button) => {

            button.addEventListener("click", () => {

                const index = button.dataset.index;

                cart.splice(index, 1);

                localStorage.setItem(
                    "cart",
                    JSON.stringify(cart)
                );

                location.reload();
            });

        });
    }
}