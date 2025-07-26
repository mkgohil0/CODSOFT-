// This is your new app.js file.
// It connects to Firebase and dynamically loads your products.

// IMPORTANT: PASTE YOUR FIREBASE CONFIGURATION KEYS HERE
const firebaseConfig = {
    apiKey: "PASTE_YOUR_API_KEY_HERE",
    authDomain: "PASTE_YOUR_AUTH_DOMAIN_HERE",
    projectId: "PASTE_YOUR_PROJECT_ID_HERE",
    storageBucket: "PASTE_YOUR_STORAGE_BUCKET_HERE",
    messagingSenderId: "PASTE_YOUR_MESSAGING_SENDER_ID_HERE",
    appId: "PASTE_YOUR_APP_ID_HERE"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Function to fetch products and display them on the page
async function loadProducts() {
    const productGrid = document.getElementById('product-grid-container');
    if (!productGrid) {
        console.error("Product grid container not found!");
        return;
    }

    try {
        // Get the 'products' collection from Firestore
        const snapshot = await db.collection('products').get();

        if (snapshot.empty) {
            productGrid.innerHTML = '<p>No products found.</p>';
            return;
        }

        let productsHTML = '';
        snapshot.forEach(doc => {
            const product = doc.data();
            const productId = doc.id; // Get the document ID for the link

            // Create the HTML for one product card
            productsHTML += `
                <a href="product-detail.html?product=${productId}" class="product-link">
                    <div class="product-item">
                        <img src="${product.imageSrc}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p>${product.shortDescription}</p>
                        <span class="price">${product.price}</span>
                        <button class="add-to-cart-btn">View Details</button>
                    </div>
                </a>
            `;
        });

        // Add all the generated HTML to the grid
        productGrid.innerHTML = productsHTML;

    } catch (error) {
        console.error("Error loading products: ", error);
        productGrid.innerHTML = '<p>Error loading products. Please try again later.</p>';
    }
}

// Load the products when the page is ready
document.addEventListener('DOMContentLoaded', loadProducts);
