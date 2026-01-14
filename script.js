// ============================================
// PORTFOLIO SCROLL-TRIGGERED CATEGORIES
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    // ============================================
    // SELECTIVE BLUE PARALLAX GLOW
    // ============================================

    const blueGlowWrapper = document.querySelector('.blue-glow-wrapper');

    if (blueGlowWrapper) {
        window.addEventListener('scroll', function () {
            const scrollY = window.pageYOffset || document.documentElement.scrollTop;

            // Move Blue light DOWN slowly (factor of 0.2)
            blueGlowWrapper.style.transform = `translate3d(0, ${scrollY * 0.2}px, 0)`;
        }, { passive: true });
    }

    // ============================================
    // HERO ARROW RE-DRAW ON SCROLL
    // ============================================

    const heroSection = document.querySelector('.hero');
    const heroArrow = document.querySelector('.hero-arrow-svg');

    if (heroSection && heroArrow) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Re-add active class to trigger animation
                    heroArrow.classList.add('active');
                } else {
                    // Remove active class to reset animation state
                    heroArrow.classList.remove('active');
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of hero is visible
        });

        observer.observe(heroSection);
        // Initial check
        if (heroSection.getBoundingClientRect().top < window.innerHeight) {
            heroArrow.classList.add('active');
        }
    }

    const portfolioItems = document.querySelectorAll('.portfolio-item');

    // ============================================
    // PORTFOLIO MODAL FUNCTIONALITY
    // ============================================

    const modal = document.getElementById('portfolioModal');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');

    // Portfolio item data (you can expand this with real data)
    const portfolioData = {
        'Viral TikTok Series': {
            tag: 'Short-Form',
            role: 'Role: Editor & Motion Graphics',
            platform: 'Platform: TikTok',
            details: [
                'Color grading and correction',
                'Motion graphics and transitions',
                'Audio mixing and enhancement',
                'Optimized for platform specifications',
                'Hook optimization for retention'
            ]
        },
        'Long-Form Documentary': {
            tag: 'YouTube',
            role: 'Role: Editor & Storytelling',
            platform: 'Platform: YouTube',
            details: [
                'Narrative structure and pacing',
                'Color grading and correction',
                'Audio mixing and enhancement',
                'B-roll integration',
                'Optimized for watch time'
            ]
        },
        'Instagram Reels Campaign': {
            tag: 'Reels',
            role: 'Role: Editor',
            platform: 'Platform: Instagram',
            details: [
                'Trending hook integration',
                'Seamless transitions',
                'Color grading and correction',
                'Audio mixing and enhancement',
                'Platform-specific optimization'
            ]
        },
        'Gaming Highlights Reel': {
            tag: 'Gaming',
            role: 'Role: Editor & Motion Graphics',
            platform: 'Platform: YouTube',
            details: [
                'Fast-paced editing',
                'Motion graphics and effects',
                'Audio mixing and enhancement',
                'Highlight selection and timing',
                'Engagement-focused pacing'
            ]
        },
        'Finance Education Series': {
            tag: 'Finance',
            role: 'Role: Editor',
            platform: 'Platform: YouTube',
            details: [
                'Educational content structure',
                'Visual aids and graphics',
                'Color grading and correction',
                'Audio mixing and enhancement',
                'Retention optimization'
            ]
        },
        'Product Launch Video': {
            tag: 'Short-Form',
            role: 'Role: Editor & Motion Graphics',
            platform: 'Platform: Multiple',
            details: [
                'Product showcase editing',
                'Motion graphics and animations',
                'Color grading and correction',
                'Audio mixing and enhancement',
                'Multi-platform optimization'
            ]
        }
    };

    // Open modal when portfolio item is clicked
    portfolioItems.forEach(item => {
        item.addEventListener('click', function () {
            const category = this.getAttribute('data-category');
            const videoType = this.getAttribute('data-video-type');
            const videoSrc = this.getAttribute('data-video-src');

            const categoryTitles = {
                'short-form': 'Short-Form Video',
                'long-form': 'Long-Form Video'
            };

            const title = categoryTitles[category] || 'Portfolio Video';
            const data = portfolioData[title] || {
                tag: category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' '),
                role: 'Role: Editor',
                platform: category === 'long-form' ? 'Platform: YouTube' : 'Platform: Social Media',
                details: [
                    'Color grading and correction',
                    'Motion graphics and transitions',
                    'Audio mixing and enhancement',
                    'Optimized for platform specifications'
                ]
            };

            // Handle Modal UI based on category
            if (category === 'long-form') {
                modal.classList.add('hide-info');
            } else {
                modal.classList.remove('hide-info');
            }

            // Populate modal text
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalTag').textContent = data.tag;
            document.getElementById('modalRole').textContent = data.role;
            document.getElementById('modalPlatform').textContent = data.platform;

            const modalList = document.getElementById('modalList');
            modalList.innerHTML = '';
            data.details.forEach(detail => {
                const li = document.createElement('li');
                li.textContent = detail;
                modalList.appendChild(li);
            });

            // Handle Video Playback
            const videoContainer = document.getElementById('modalVideoContainer');
            videoContainer.innerHTML = ''; // Clear previous
            videoContainer.classList.remove('short-form'); // Reset

            if (category === 'short-form') {
                videoContainer.classList.add('short-form');
            }

            if (videoType === 'youtube' && videoSrc) {
                videoContainer.innerHTML = `
                    <iframe 
                        src="https://www.youtube.com/embed/${videoSrc}?autoplay=1" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                    </iframe>`;
            } else if (videoType === 'local' && videoSrc) {
                videoContainer.innerHTML = `
                    <video controls autoplay playsinline>
                        <source src="${videoSrc}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>`;
            }

            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal functions
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        // Stop video playback by clearing container
        document.getElementById('modalVideoContainer').innerHTML = '';
    }

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    // Close modal on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // ============================================
    // SMOOTH SCROLLING FOR ANCHOR LINKS
    // ============================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ============================================
    // SCROLL ANIMATIONS
    // ============================================

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    // Observer for portfolio categories (scroll-triggered visibility)
    const categoryObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe portfolio categories
    const portfolioCategories = document.querySelectorAll('.portfolio-category');
    portfolioCategories.forEach(category => {
        categoryObserver.observe(category);
    });

    // Observer for other animated elements
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                // Reset animation when scrolling up/out of view
                entry.target.classList.remove('is-visible');
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    // We now just look for elements with the .animate-on-scroll class
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // ============================================
    // LAZY LOAD VIDEO GRID (Performance Optimization)
    // ============================================
    // Only play videos when they are actually visible on screen
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;

            if (entry.isIntersecting) {
                // Video is visible: Play it
                // We use a promise to handle occasional play() errors
                const playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        // Auto-play was prevented (often low power mode)
                        // This is fine, we just stay paused
                    });
                }
            } else {
                // Video is not visible: Pause it to save CPU/Battery
                video.pause();
            }
        });
    }, {
        threshold: 0.2, // Trigger when 20% of the video is visible
        rootMargin: "50px 0px" // Start loading slightly before it scrolls into view
    });

    // Attach observer to all lazy videos
    document.querySelectorAll('.lazy-video').forEach(video => {
        videoObserver.observe(video);
    });

    // ============================================
    // NAVBAR SCROLL EFFECT (if needed in future)
    // ============================================

    let lastScroll = 0;
    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;

        // Add any scroll-based effects here if needed
        lastScroll = currentScroll;
    });

    // ============================================
    // FAQ ACCORDION FUNCTIONALITY
    // ============================================

    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function () {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');

            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });

            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });

    // ============================================
    // MOBILE MENU (if needed in future)
    // ============================================
});
