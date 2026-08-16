const newArrivals = [
    {
        id: 1,
        name: "T SHIRT WITH TAPE DETAILS",
        image: "assets/images/arrival1.png",
        rating: "★★★★★",
        ratingValue: "5.0/5",
        price: "$212",
        oldPrice: "$232",
        discount: "-20%"
    },

    {
        id: 2,
        name: "SKINNY FIT JEANS",
        image: "assets/images/arrival2.png",
        rating: "★★★★",
        ratingValue: "4.0/5",
        price: "$145"
    },

    {
        id: 3,
        name: "CHECKERED SHIRT",
        image: "assets/images/arrival3.png",
        rating: "★★★",
        ratingValue: "3.0/5",
        price: "$80"
    },

    {
        id: 4,
        name: "SLEEVE STRIPED T SHIRT",
        image: "assets/images/arrival4.png",
        rating: "★★★★",
        ratingValue: "4.0/5",
        price: "$210"
    }
];

const topSelling = [
    {
        id: 5,
        name: "Vertical Striped Shirt",
        image: "assets/images/image 7.png",
        rating: "★★★★★",
        ratingValue: "5.0/5",
        price: "$212",
        oldPrice: "$232",
        discount: "-20%"
    },

    {
        id: 6,
        name: "Courage Graphic T shirt",
        image: "assets/images/image 8.png",
        rating: "★★★★",
        ratingValue: "4.0/5",
        price: "$145"
    },

    {
        id: 7,
        name: "Loose Fit Bermuda Shorts",
        image: "assets/images/image 9.png",
        rating: "★★★",
        ratingValue: "3.0/5",
        price: "$80"
    },

    {
        id: 8,
        name: "Faded Skinny Jeans",
        image: "assets/images/image 10.png",
        rating: "★★★★",
        ratingValue: "4.0/5",
        price: "$210"
    }
];

function createProductCard(product) {
    const card = document.createElement("a");

    card.classList.add("arrivals_card");
    card.href = `product.html?id=${product.id}`;

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">

        <h3>${product.name}</h3>

        <p class="rating">
            <span>${product.rating}</span>
            ${product.ratingValue}
        </p>

        <div class="price">
            <span>${product.price}</span>

            ${
                product.oldPrice
                    ? `<span class="line-through">${product.oldPrice}</span>`
                    : ""
            }

            ${
                product.discount
                    ? `<button class="discount">${product.discount}</button>`
                    : ""
            }
        </div>
    `;

    return card;
}

const productsContainers =
    document.querySelectorAll(".arrivals_products");

if (productsContainers.length == 2) {

    newArrivals.forEach((product) => {
        productsContainers[0].appendChild(
            createProductCard(product)
        );
    });

    topSelling.forEach((product) => {
        productsContainers[1].appendChild(
            createProductCard(product)
        );
    });
}