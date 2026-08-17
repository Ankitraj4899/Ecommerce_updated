
This is a static e-commerce website built using **HTML5, SCSS, and Vanilla JavaScript**.

The project provides a clothing-shopping experience where users can:

* Browse new arrivals and top-selling products
* Search for products
* View product details
* Select product options
* Add products to the cart
* Update cart contents
* Remove products from the cart
* View a dynamically calculated order summary
* Apply discounts to the order
* Login using predefined testing credentials
* Access the cart only after logging in

Product and login information used by the application is stored in the browser's **Local Storage**.


```text
SHOP.CO/
│
├── assets/
│   ├── icons/
│   │   └── Website icons
│   │
│   └── images/
│       └── Product, brand and website images
│
├── js/
│   ├── auth.js
│   │   └── Handles login authentication
│   │
│   ├── cart.js
│   │   └── Handles cart functionality and order summary
│   │
│   ├── main.js
│   │   └── Handles general website functionality
│   │
│   ├── product_details.js
│   │   └── Handles product detail page functionality
│   │
│   └── products.js
│       └── Contains product data and product card functionality
│
├── scss/
│   ├── abstracts/
│   │   ├── mixins.scss
│   │   └── variables.scss
│   │
│   ├── components/
│   │   └── Component-specific SCSS files
│   │
│   ├── layout/
│   │   └── Layout-specific SCSS files
│   │
│   └── main.scss
│       └── Main SCSS entry file
│
├── index.html
│   └── Home page
│
├── login.html
│   └── Login page
│
├── product_details.html
│   └── Product details page
│
├── cart.html
│   └── Shopping cart and order summary page
│
└── README.md
    └── Project documentation
```

Login Credentials:-
 
 Email     `admin@gmail.com` 
 Password  `Admin@123`       