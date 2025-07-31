// Import the functions you need from the Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// Your web app's Firebase configuration
// IMPORTANT: For production, secure these keys using App Check and strong security rules.
const firebaseConfig = {
  apiKey: "AIzaSyBDPOqS36Ka9hNCfTuyCbhdgpn2dmIIw-o",
  authDomain: "shuddh-organic-store.firebaseapp.com",
  projectId: "shuddh-organic-store",
  storageBucket: "shuddh-organic-store.appspot.com", // Corrected storage bucket domain
  messagingSenderId: "48476584230",
  appId: "1:48476584230:web:a5ecb53d8adc3e3b6c69e7",
  measurementId: "G-5WW4GGL034"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get the Auth service
const auth = getAuth(app);

// Get elements from the DOM
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

// Add submit event listener to the form
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting normally

    // Get user input
    const email = emailInput.value;
    const password = passwordInput.value;

    // Clear previous error messages
    errorMessage.textContent = '';
    errorMessage.classList.add('hidden');

    // Validate input
    if (!email || !password) {
        errorMessage.textContent = 'Please enter both email and password.';
        errorMessage.classList.remove('hidden');
        return;
    }

    // Sign in with Firebase using the new modular functions
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in successfully
            const user = userCredential.user;
            console.log('Successfully logged in:', user.email);
            
            // Redirect to the homepage after successful login
            window.location.href = 'index.html'; 
        })
        .catch((error) => {
            // Handle specific authentication errors
            const errorCode = error.code;
            let friendlyMessage = 'An unknown error occurred. Please try again.';

            if (errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password' || errorCode === 'auth/invalid-credential') {
                friendlyMessage = 'Invalid email or password. Please try again.';
            } else if (errorCode === 'auth/invalid-email') {
                friendlyMessage = 'The email address is not valid.';
            }
            
            console.error('Login Error:', error);
            
            // Show the user-friendly error message
            errorMessage.textContent = friendlyMessage;
            errorMessage.classList.remove('hidden');
        });
});
