document.addEventListener('DOMContentLoaded', () => {
    const productDetailContainer = document.getElementById('product-detail-container');

    // This check prevents errors if the element doesn't exist
    if (!productDetailContainer) {
        console.error('Product detail container not found!');
        return;
    }
    
    // The same product data needs to be available here to find the product
    const products = [
        { id: 1, name: 'Skincare', price: 25.00, image: 'skincare.png', description: 'High-quality skincare product for all skin types.' },
        { id: 2, name: 'Honey', price: 15.50, image: 'honey.png', description: 'Pure, natural honey from local farms.' },
        { id: 3, name: 'Grain', price: 10.00, image: 'grain.png', description: 'Organic whole grains, rich in fiber.' },
        { id: 4, name: 'Oil', price: 20.00, image: 'oil.png', description: 'Cold-pressed cooking oil for a healthy lifestyle.' },
        { id: 5, name: 'Spices', price: 8.75, image: 'spices.png', description: 'Aromatic spices sourced from the best regions.' },
        { id: 6, name: 'Tea', price: 12.25, image: 'tea.png', description: 'Exquisite tea leaves for a refreshing experience.' }
    ];

    // Get the product ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Find the product that matches the ID from the URL
    const product = products.find(p => p.id == productId);

    // Display the product details or a "not found" message
    if (product) {
        productDetailContainer.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
        `;
    } else {
        productDetailContainer.innerHTML = '<p>Product not found. Please go back and select a product.</p>';
    }
});
