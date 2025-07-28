/**
 * script.js
 * This file handles the interactive elements of the Sudhh Organic website.
 */

document.addEventListener('DOMContentLoaded', function() {

    // --- Hero Banner Background Color Changer ---
    const heroBanner = document.querySelector('.hero-banner');
    if (heroBanner) {
        const heroColors = [
            'var(--hero-color-1)',
            'var(--hero-color-2)',
            'var(--hero-color-3)',
            'var(--hero-color-4)',
            'var(--hero-color-5)'
        ];
        let currentColorIndex = 0;

        function changeHeroColor() {
            currentColorIndex = (currentColorIndex + 1) % heroColors.length;
            heroBanner.style.backgroundColor = heroColors[currentColorIndex];
        }
        setInterval(changeHeroColor, 5000);
    }

    // --- Product Item Click Handler ---
    document.querySelectorAll('.clickable-product').forEach(item => {
        item.addEventListener('click', event => {
            // Prevent button clicks from navigating
            if (event.target.tagName === 'BUTTON') {
                return;
            }

            const name = item.dataset.name;
            const price = item.dataset.price;
            const img = item.dataset.img;
            const desc = item.dataset.desc;

            // Create the URL with query parameters
            const url = `product-detail.html?name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}&img=${encodeURIComponent(img)}&desc=${encodeURIComponent(desc)}`;

            // Go to the product detail page
            window.location.href = url;
        });
    });

});
