document.addEventListener('DOMContentLoaded', () => {
	
	// Show loading spinner initially
    const spinner = document.getElementById('loading-spinner');
    
    // Hide spinner after page loads
    setTimeout(() => {
        spinner.classList.add('hidden');
    }, 1000); // 1 second loading animation
	
	const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Function to check scroll position and show/hide button
    function toggleScrollToTopButton() {
        if (window.scrollY > 300) { // Show button after scrolling 300px
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    }

    // Smooth scroll to top function
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll effect
        });
    }

    // Event listener for scrolling
    window.addEventListener('scroll', toggleScrollToTopButton);

    // Event listener for button click
    scrollToTopBtn.addEventListener('click', scrollToTop);

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const darkModeToggle = document.getElementById('darkModeToggle');

    // Mobile Navigation Toggle
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Close nav when a link is clicked (for single-page navigation)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            navLinks.forEach(link => {
                link.style.animation = ''; // Reset animation
            });
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dark Mode Toggle Functionality
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        // Optionally save user preference to localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Change icon to sun
            darkModeToggle.setAttribute('aria-label', 'Toggle light mode');
        } else {
            localStorage.setItem('theme', 'light');
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Change icon to moon
            darkModeToggle.setAttribute('aria-label', 'Toggle dark mode');
        }
    });

    // Check for saved theme preference on load
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Ensure correct icon on load
        darkModeToggle.setAttribute('aria-label', 'Toggle light mode');
    } else {
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Ensure correct icon on load
        darkModeToggle.setAttribute('aria-label', 'Toggle dark mode');
    }
});