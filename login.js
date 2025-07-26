// IMPORTANT: PASTE YOUR PERSONAL FIREBASE CONFIGURATION KEYS HERE
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
const auth = firebase.auth();

const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting normally

    const email = emailInput.value;
    const password = passwordInput.value;

    // Sign in with Firebase
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in successfully
            const user = userCredential.user;
            console.log('Successfully logged in:', user.email);
            
            // Redirect to the homepage after successful login
            window.location.href = 'index.html'; 
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const message = error.message;
            console.error('Login Error:', errorCode, message);
            
            // Show a user-friendly error message
            errorMessage.textContent = 'Invalid email or password. Please try again.';
            errorMessage.classList.remove('hidden');
        });
});
