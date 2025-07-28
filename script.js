document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('product-container');

    // This check prevents errors if the element doesn't exist
    if (!productContainer) {
        console.error('Product container not found!');
        return;
    }

    // Sample product data
    const products = [
        { id: 1, name: 'Skincare', price: 25.00, image: 'skincare.png', description: 'High-quality skincare product for all skin types.' },
        { id: 2, name: 'Honey', price: 15.50, image: 'honey.png', description: 'Pure, natural honey from local farms.' },
        { id: 3, name: 'Grain', price: 10.00, image: 'grain.png', description: 'Organic whole grains, rich in fiber.' },
        { id: 4, name: 'Oil', price: 20.00, image: 'oil.png', description: 'Cold-pressed cooking oil for a healthy lifestyle.' },
        { id: 5, name: 'Spices', price: 8.75, image: 'spices.png', description: 'Aromatic spices sourced from the best regions.' },
        { id: 6, name: 'Tea', price: 12.25, image: 'tea.png', description: 'Exquisite tea leaves for a refreshing experience.' }
    ];

    // Function to navigate to the product detail page
    function showProductDetails(productId) {
        window.location.href = `product-detail.html?id=${productId}`;
    }

    // Populate product cards
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.dataset.productId = product.id;

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
        `;

        // Add a click event listener to navigate to the product detail page
        productCard.addEventListener('click', () => {
            showProductDetails(product.id);
        });

        productContainer.appendChild(productCard);
    });
});
