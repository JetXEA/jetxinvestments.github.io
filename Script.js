document.querySelectorAll('.collapsible').forEach(button => {
            button.addEventListener('click', () => {
                button.classList.toggle('active');
                const content = button.nextElementSibling;
                content.style.display = content.style.display === 'block' ? 'none' : 'block';
            });
        });

        // Image slider functionality
        let currentIndex = 0;
        const images = document.querySelectorAll('.image-slider div');
        setInterval(() => {
            images[currentIndex].style.opacity = 0;
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].style.opacity = 1;
        }, 3000);

        // Ensure mailto links open in the default mail client
        document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = link.href;
            });
        });

        // Animate table cells
        const tableCells = document.querySelectorAll('td, th');
        tableCells.forEach((cell, index) => {
            cell.style.animationDelay = `${index * 0.1}s`; // Stagger the animation
            cell.style.opacity = 1; // Make cells visible after animation
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });