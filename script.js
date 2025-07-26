/**
 * script.js
 * This file handles the interactive elements of the Shuddh Organic website.
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

        // Function to change the background color
        function changeHeroColor() {
            currentColorIndex = (currentColorIndex + 1) % heroColors.length;
            heroBanner.style.backgroundColor = heroColors[currentColorIndex];
        }

        // Change color every 5 seconds (5000 milliseconds)
        setInterval(changeHeroColor, 5000);
    }


    // --- Mobile Side Drawer Functionality ---
    const mobileMenuButton = document.querySelector('.lg\\:hidden'); // The hamburger icon
    const sideDrawer = document.querySelector('.mobile-side-drawer');
    const overlay = document.querySelector('.overlay');
    const body = document.body;
    const closeDrawerButton = document.querySelector('.close-drawer-btn');
    const drawerLinks = document.querySelectorAll('.drawer-link');

    // Function to open the drawer
    function openDrawer() {
        if (sideDrawer && overlay) {
            sideDrawer.classList.add('active');
            overlay.classList.add('active');
            body.classList.add('no-scroll');
        }
    }

    // Function to close the drawer
    function closeDrawer() {
        if (sideDrawer && overlay) {
            sideDrawer.classList.remove('active');
            overlay.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    }

    // Event listeners to open and close the drawer
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', openDrawer);
    }
    if (closeDrawerButton) {
        closeDrawerButton.addEventListener('click', closeDrawer);
    }
    if (overlay) {
        overlay.addEventListener('click', closeDrawer);
    }
    
    // Add event listeners to each link in the drawer to close it on click
    drawerLinks.forEach(link => {
        link.addEventListener('click', closeDrawer);
    });

});

