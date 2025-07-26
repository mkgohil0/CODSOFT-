document.addEventListener('DOMContentLoaded', () => {
    const firebaseConfig = {
  apiKey: "AIzaSy...YOUR_KEY_HERE...",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456"
};


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
            imageSrc: 'oil.png',
            price: '$18.50',
            rating: 5,
            origin: 'Extracted from organic groundnuts in Gujarat.',
            description: 'Our cold-pressed groundnut oil retains all the natural nutrients and flavor. It is ideal for sautéing, frying, and all your daily cooking needs, promoting a healthy heart.'
        },
        'grains': {
            name: 'Organic Grains',
            imageSrc: 'grain.png',
            price: '$7.99',
            rating: 4,
            origin: 'Harvested from the fertile plains of Punjab.',
            description: 'A wholesome blend of organic millets and quinoa. High in fiber and protein, these grains are perfect for a balanced diet, helping you stay energetic throughout the day.'
        },
        'tea': {
            name: 'Herbal Tea Blends',
            imageSrc: 'tea.png',
            price: '$9.25',
            rating: 4.5,
            origin: 'A curated blend of herbs from the Nilgiri Hills.',
            description: 'Soothing and refreshing, our herbal tea blends are naturally caffeine-free and packed with flavors that calm the mind and body. Enjoy a cup of tranquility.'
        },
        'spices': {
            name: 'Organic Spices',
            imageSrc: 'spices.png',
            price: '$6.50',
            rating: 4,
            origin: 'Hand-ground spices from the fields of Kerala.',
            description: 'Aromatic and flavorful, our organic spices will elevate your culinary creations. Free from artificial colors and preservatives, they bring authentic taste to your dishes.'
        },
        'skincare': {
            name: 'Organic Skincare',
            imageSrc: 'skincare.png',
            price: '$25.00',
            rating: 5,
            origin: 'Crafted with botanicals from across India.',
            description: 'Nourish your skin naturally and gently with our range of organic skincare products. Made with love and care, they are free from harsh chemicals and suitable for all skin types.'
        }
    };

    const params = new URLSearchParams(window.location.search);
    const productId = params.get('product');

    const productData = products[productId];

    const container = document.getElementById('product-detail-container');
    const notFoundDiv = document.getElementById('product-not-found');

    if (productData) {
        container.classList.remove('hidden');
        
        document.getElementById('product-image').src = productData.imageSrc;
        document.getElementById('product-image').alt = productData.name;
        document.getElementById('product-title').textContent = productData.name;
        document.getElementById('product-origin').textContent = `Origin: ${productData.origin}`;
        document.getElementById('product-description').textContent = productData.description;
        document.getElementById('product-price').textContent = productData.price;
        document.title = `${productData.name} - Shuddh Organic`;

        const ratingContainer = document.getElementById('product-rating');
        ratingContainer.innerHTML = '';
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
        notFoundDiv.classList.remove('hidden');
    }
});
