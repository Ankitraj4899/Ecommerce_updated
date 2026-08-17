const searchInput = document.querySelector(".searchInput");

const allProducts = [...newArrivals,...topSelling];

const newArrivalsContainer = document.querySelector(
    "#new_arrivals .arrivals_products"
);

const topSellingContainer = document.querySelector(
    "#on_sale .arrivals_products"
);

const newArrivalsSection = document.querySelector("#new_arrivals");
const topSellingSection = document.querySelector("#on_sale");

if (searchInput) {
    searchInput.addEventListener("input", () => {

        const searchValue = searchInput.value
            .toLowerCase()
            .trim();

        if (searchValue === "") {
            showOriginalProducts();
            return;
        }

        const matchedProducts = allProducts.filter((product) =>
            product.name.toLowerCase().includes(searchValue)
        );

        showSearchResults(matchedProducts);
    });
}

function showSearchResults(products) {

    newArrivalsContainer.innerHTML = "";
    topSellingContainer.innerHTML = "";

    topSellingSection.style.display = "none";
    newArrivalsSection.querySelector("h2").textContent =
        "Search Results";

    if (products.length === 0) {
        newArrivalsContainer.innerHTML = `
            <p>No products found.</p>
        `;
        return;
    }

    products.forEach((product) => {
        newArrivalsContainer.appendChild(
            createProductCard(product)
        );
    });
}

function showOriginalProducts() {

    newArrivalsContainer.innerHTML = "";
    topSellingContainer.innerHTML = "";

    topSellingSection.style.display = "";

    newArrivalsSection.querySelector("h2").textContent =
        "New Arrivals";

    newArrivals.forEach((product) => {
        newArrivalsContainer.appendChild(
            createProductCard(product)
        );
    });

    topSellingSection.querySelector("h2").textContent =
        "TOP SELLING";

    topSelling.forEach((product) => {
        topSellingContainer.appendChild(
            createProductCard(product)
        );
    });
}