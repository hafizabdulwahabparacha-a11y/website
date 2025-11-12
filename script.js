
        document.addEventListener('DOMContentLoaded', function() {
            // Research section text fade-in
            const textElements = document.querySelectorAll('.card-text');
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            textElements.forEach(text => {
                observer.observe(text);
            });

            // Awards section animation
            const awards = document.querySelectorAll('.award-badge');
            awards.forEach((award, index) => {
                setTimeout(() => {
                    award.classList.add('animate-pop');
                }, index * 100);
                
                award.setAttribute('data-bs-toggle', 'tooltip');
                award.setAttribute('data-bs-placement', 'top');
                const year = award.getAttribute('data-year');
                award.setAttribute('title', `Awarded in ${year}`);
            });
            
            // Initialize tooltips
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl);
            });

            // Publications section animation
            const publicationItems = document.querySelectorAll('.publication-item');
            function isElementInViewport(el) {
                const rect = el.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }

            function checkAndAnimate() {
                publicationItems.forEach((item, index) => {
                    if (!item.classList.contains('fade-in') && isElementInViewport(item)) {
                        item.style.animationDelay = `${index * 0.1}s`;
                        item.classList.add('fade-in');
                    }
                });
            }

            checkAndAnimate();
            window.addEventListener('scroll', checkAndAnimate);

            // Legacy section icon animation
            const icons = document.querySelectorAll('.card-title i');
            icons.forEach((icon, index) => {
                icon.style.transition = 'color 0.5s ease-out';
                setTimeout(() => {
                    icon.style.color = '#0056b3';
                }, 1000 + (index * 200));
            });
        });