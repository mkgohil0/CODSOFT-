/**
 * script.js
 * This file handles the interactive elements of the Shuddh Organic website.
 */

document.addEventListener('DOMContentLoaded', function() {
    const firebaseConfig = {
  apiKey: "AIzaSy...YOUR_KEY_HERE...",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456"
};

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

    // --- Mobile Side Drawer Functionality ---
    const mobileMenuButton = document.querySelector('.lg\\:hidden');
    const sideDrawer = document.querySelector('.mobile-side-drawer');
    const overlay = document.querySelector('.overlay');
    const body = document.body;
    const closeDrawerButton = document.querySelector('.close-drawer-btn');
    const drawerLinks = document.querySelectorAll('.drawer-link');

    function openDrawer() {
        if (sideDrawer && overlay) {
            sideDrawer.classList.add('active');
            overlay.classList.add('active');
            body.classList.add('no-scroll');
        }
    }

    function closeDrawer() {
        if (sideDrawer && overlay) {
            sideDrawer.classList.remove('active');
            overlay.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    }

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', openDrawer);
    }
    if (closeDrawerButton) {
        closeDrawerButton.addEventListener('click', closeDrawer);
    }
    if (overlay) {
        overlay.addEventListener('click', closeDrawer);
    }
    drawerLinks.forEach(link => {
        link.addEventListener('click', closeDrawer);
    });
});
