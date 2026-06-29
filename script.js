document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');

    // Handle mobile nav toggle
    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('open');
        });
    }

    // Handle pill selection
    const pills = document.querySelectorAll('.pill');
    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            pills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            
            // Note: In a real app, this would filter the brand cards based on category
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-item');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if(targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    
                    // Update active state
                    navLinks.forEach(nav => nav.classList.remove('active'));
                    this.classList.add('active');

                    // Close mobile nav if open
                    if (mobileNav && mobileNav.classList.contains('open')) {
                        mobileNav.classList.remove('open');
                    }
                }
            }
        });
    });
});
