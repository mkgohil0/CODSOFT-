// IMPORTANT: PASTE YOUR PERSONAL FIREBASE CONFIGURATION KEYS HERE
const firebaseConfig = {
  apiKey: "AIzaSyBDPOqS36Ka9hNCfTuyCbhdgpn2dmIIw-o",
  authDomain: "shuddh-organic-store.firebaseapp.com",
  projectId: "shuddh-organic-store",
  storageBucket: "shuddh-organic-store.firebasestorage.app",
  messagingSenderId: "48476584230",
  appId: "1:48476584230:web:a5ecb53d8adc3e3b6c69e7",
  measurementId: "G-5WW4GGL034"
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
