const product = JSON.parse(
    localStorage.getItem("selectedProduct")
);

if (product) {

    document.querySelector("#productImage").src = product.image;
    document.querySelector("#productImage").alt = product.name;

    document.querySelector("#productName").textContent =
        product.name;

    document.querySelector("#productRating").textContent =
        product.rating;

    document.querySelector("#ratingValue").textContent =
        product.ratingValue;

    document.querySelector("#productPrice").textContent =
        product.price;


    const oldPrice = document.querySelector("#oldPrice");
    const discount = document.querySelector("#discount");


    if (product.oldPrice) {

        oldPrice.textContent = product.oldPrice;
        oldPrice.style.display = "inline-block";

    } else {

        oldPrice.style.display = "none";

    }


    if (product.discount) {

        discount.textContent = product.discount;
        discount.style.display = "inline-block";

    } else {

        discount.style.display = "none";

    }


    let quantity = 1;

    const quantityElement =
        document.querySelector("#quantity");

    const minusButton =
        document.querySelector("#minus");

    const plusButton =
        document.querySelector("#plus");

    const addToCartButton =
        document.querySelector(".add_to_cart");


    plusButton.addEventListener("click", () => {

        quantity++;

        quantityElement.textContent = quantity;

    });


    minusButton.addEventListener("click", () => {

        if (quantity > 1) {

            quantity--;

            quantityElement.textContent = quantity;

        }

    });


    addToCartButton.addEventListener("click", () => {

        let cart = JSON.parse(
            localStorage.getItem("cart")
        ) || [];


        const existingProduct = cart.find(
            item => item.id === product.id
        );


        if (existingProduct) {

            existingProduct.quantity += quantity;

        } else {

            cart.push({
                ...product,
                quantity: quantity
            });

        }


        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );


        window.location.href = "cart.html";

    });


} else {

    document.querySelector(".product_details").innerHTML =
        "<p>Product not found.</p>";

}