document.addEventListener('DOMContentLoaded', () => {

    // This is our "database" of products. In a real website, this would come from a server.
    const products = {
        'honey': {
            name: 'Organic Honey',
            imageSrc: 'honey.png',
            price: '$12.99',
            rating: 4.5,
            origin: 'Sourced from the pristine Himalayan foothills.',
            description: '100% pure, raw, and unfiltered honey, rich in natural enzymes and antioxidants. Perfect for sweetening your tea, drizzling on yogurt, or as a healthy sugar substitute.'
        },
        'oil': {
            name: 'Cold-Pressed Oil',
            imageSrc: 'https://images.unsplash.com/photo-1579737190538-2ee7a4a98059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjY1NDl8MHwxfHNlYXJjaHwyNnx8b3JnYW5pYyUyMG9pbHxlbnwwfHx8fDE3MDA0NTc1Njh8MA&ixlib=rb-4.0.3&q=80&w=400',
            price: '$18.50',
            rating: 5,
            origin: 'Extracted from organic groundnuts in Gujarat.',
            description: 'Our cold-pressed groundnut oil retains all the natural nutrients and flavor. It is ideal for sautéing, frying, and all your daily cooking needs, promoting a healthy heart.'
        },
        'grains': {
            name: 'Organic Grains',
            imageSrc: 'https://images.unsplash.com/photo-1627885449272-4d1a49f80164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjY1NDl8MHwxfHNlYXJjaHwxNXx8b3JnYW5pYyUyMGdyYWlufGVufDB8fHx8MTcwMDQ1NzUxN3ww&ixlib=rb-4.0.3&q=80&w=400',
            price: '$7.99',
            rating: 4,
            origin: 'Harvested from the fertile plains of Punjab.',
            description: 'A wholesome blend of organic millets and quinoa. High in fiber and protein, these grains are perfect for a balanced diet, helping you stay energetic throughout the day.'
        }
        // Add more product objects here with unique keys
    };

    // 1. Get the product ID from the URL
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('product');

    // 2. Find the product data from our "database"
    const productData = products[productId];

    const container = document.getElementById('product-detail-container');
    const notFoundDiv = document.getElementById('product-not-found');

    if (productData) {
        // If we found the product, show the container
        container.classList.remove('hidden');
        
        // 3. Populate the HTML elements with the product data
        document.getElementById('product-image').src = productData.imageSrc;
        document.getElementById('product-image').alt = productData.name;
        document.getElementById('product-title').textContent = productData.name;
        document.getElementById('product-origin').textContent = `Origin: ${productData.origin}`;
        document.getElementById('product-description').textContent = productData.description;
        document.getElementById('product-price').textContent = productData.price;
        document.title = `${productData.name} - Shuddh Organic`; // Update page title

        // 4. Generate the star rating
        const ratingContainer = document.getElementById('product-rating');
        ratingContainer.innerHTML = ''; // Clear any existing stars
        const fullStars = Math.floor(productData.rating);
        const halfStar = productData.rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            ratingContainer.innerHTML += '<i class="fas fa-star"></i>';
        }
        if (halfStar) {
            ratingContainer.innerHTML += '<i class="fas fa-star-half-alt"></i>';
        }
        const emptyStars = 5 - Math.ceil(productData.rating);
        for (let i = 0; i < emptyStars; i++) {
            ratingContainer.innerHTML += '<i class="far fa-star"></i>';
        }

    } else {
        // If no product was found for the ID, show the "not found" message
        notFoundDiv.classList.remove('hidden');
    }
});
