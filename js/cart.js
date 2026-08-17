const cartLink = document.querySelector("#cart_link");

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

    const cartSubtotal = document.querySelector("#cartSubtotal");
    const cartDiscount = document.querySelector("#cartDiscount");
    const cartTotal = document.querySelector("#cartTotal");

    const promoCode = document.querySelector("#promoCode");
    const applyPromo = document.querySelector("#applyPromo");

    const deliveryFee = 15;

    let appliedCoupons =
        JSON.parse(localStorage.getItem("appliedCoupons")) || [];

    let couponDiscount = 0;


    function calculateSubtotal() {

        let subtotal = 0;

        cart.forEach((product) => {

            const price = parseFloat(
                String(product.price).replace("$", "")
            );

            subtotal += price * product.quantity;

        });

        return subtotal;
    }


    function updateOrderSummary() {

        const subtotal = calculateSubtotal();

        const totalDiscount = couponDiscount;

        const total = subtotal - totalDiscount + deliveryFee;

        cartSubtotal.textContent =
            `$${subtotal.toFixed(0)}`;

        cartDiscount.textContent =
            `-$${totalDiscount.toFixed(0)}`;

        cartTotal.textContent =
            `$${Math.max(total, 0).toFixed(0)}`;
    }


    function displayCart() {

        cartContainer.innerHTML = "";

        if (cart.length === 0) {

            cartContainer.innerHTML = `
                <p>Your cart is empty.</p>
            `;

            updateOrderSummary();

            return;
        }


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
                        aria-label="Remove ${product.name}"
                    >
                        <img
                            src="assets/icons/Frame3.svg"
                            alt=""
                        >
                    </button>

                </div>
            `;

            cartContainer.appendChild(cartItem);

        });


        const removeButtons =
            document.querySelectorAll(".remove_cart_item");


        removeButtons.forEach((button) => {

            button.addEventListener("click", () => {

                const index = Number(button.dataset.index);

                cart.splice(index, 1);

                localStorage.setItem(
                    "cart",
                    JSON.stringify(cart)
                );

                displayCart();

            });

        });


        updateOrderSummary();
    }


    applyPromo.addEventListener("click", () => {

        const code = promoCode.value
            .trim()
            .toLowerCase();


        if (code !== "save10" && code !== "save20") {

            alert("Invalid coupon code.");
            return;

        }


        if (appliedCoupons.includes(code)) {

            alert("This coupon has already been used.");
            return;

        }


        const subtotal = calculateSubtotal();


        if (subtotal === 0) {

            alert("Your cart is empty.");
            return;

        }


        const discountRate =
            code === "save10" ? 0.10 : 0.20;

        const discount =
            subtotal * discountRate;


        couponDiscount += discount;


        appliedCoupons.push(code);

        localStorage.setItem(
            "appliedCoupons",
            JSON.stringify(appliedCoupons)
        );


        promoCode.value = "";

        updateOrderSummary();

        alert(
            `${code.toUpperCase()} applied successfully!`
        );

    });


    displayCart();
}
