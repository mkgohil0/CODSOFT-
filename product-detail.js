/**
 * product-detail.js
 * This script reads product data from the URL and displays it on the product detail page.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Get the query parameters from the URL
    const params = new URLSearchParams(window.location.search);

    const productName = params.get('name');
    const productPrice = params.get('price');
    const productImg = params.get('img');
    const productDesc = params.get('desc');

    // Update the page with the product data, providing defaults if not found
    if (document.getElementById('product-name')) {
        document.getElementById('product-name').textContent = productName || 'Product Not Found';
    }
    if (document.getElementById('product-price')) {
        document.getElementById('product-price').textContent = productPrice || '$0.00';
    }
    if (document.getElementById('product-img')) {
        document.getElementById('product-img').src = productImg || 'https://placehold.co/600x600/CCCCCC/FFFFFF?text=No+Image';
    }
    if (document.getElementById('product-desc')) {
        document.getElementById('product-desc').textContent = productDesc || 'No description available.';
    }
});
