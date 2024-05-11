// Sample product data
const products = [
    {
        name: 'Ceramic Tiles',
        image: 'images/ceramic-tiles.jpg',
        price: 25.99
    },
    {
        name: 'Bricks',
        image: 'images/bricks.jpg',
        price: 15.99
    },
    {
        name: 'Cement',
        image: 'images/cement.jpg',
        price: 10.99
    },
    {
        name: 'Interior Wallpaper',
        image: 'images/interior-wallpaper.jpg',
        price: 35.99
    }
];

// Sample recommended product data
const recommendedProducts = [
    {
        name: 'Wooden Flooring',
        image: 'images/wooden-flooring.jpg',
        price: 45.99
    },
    {
        name: 'Plaster of Paris',
        image: 'images/plaster-of-paris.jpg',
        price: 12.99
    },
    {
        name: 'Decorative Stones',
        image: 'images/decorative-stones.jpg',
        price: 29.99
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('productContainer');
    const recommendedProductContainer = document.getElementById('recommendedProductContainer');
    const cartCounter = document.getElementById('cartCounter');
    const cartModal = document.getElementById('cartModal');
    const cartContent = document.getElementById('cartContent');
    const totalAmount = document.getElementById('totalAmount');

    let cart = [];
    
    // Display products
    function displayProducts(products, container) {
        container.innerHTML = '';
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');

            const productImage = document.createElement('img');
            productImage.src = product.image;
            productImage.alt = product.name;

            const productName = document.createElement('h3');
            productName.textContent = product.name;

            const productPrice = document.createElement('p');
            productPrice.textContent = `$${product.price}`;

            const addToCartBtn = document.createElement('button');
            addToCartBtn.textContent = 'Add to Cart';
            addToCartBtn.addEventListener('click', () => {
                addToCart(product);
                updateCart();
            });

            productItem.appendChild(productImage);
            productItem.appendChild(productName);
            productItem.appendChild(productPrice);
            productItem.appendChild(addToCartBtn);

            container.appendChild(productItem);
        });
    }

    // Add product to cart
    function addToCart(product) {
        cart.push(product);
    }

    // Update cart
    function updateCart() {
        cartCounter.textContent = cart.length;
        displayCart();
    }

    // Display cart
    function displayCart() {
        cartContent.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            const itemName = document.createElement('p');
            itemName.textContent = item.name;

            const itemPrice = document.createElement('span');
            itemPrice.textContent = `$${item.price}`;

            cartItem.appendChild(itemName);
            cartItem.appendChild(itemPrice);

            cartContent.appendChild(cartItem);

            total += item.price;
        });
        totalAmount.textContent = total.toFixed(2);
    }

    // Display recommended products
    displayProducts(products, productContainer);
    displayProducts(recommendedProducts, recommendedProductContainer);

    // Open cart modal
    document.querySelector('nav ul li:nth-child(4)').addEventListener('click', () => {
        cartModal.style.display = 'block';
        updateCart();
    });

    // Close cart modal
    document.querySelector('.close').addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    // Click outside of cart modal to close
    window.onclick = function(event) {
        if (event.target == cartModal) {
            cartModal.style.display = 'none';
        }
    };
});

