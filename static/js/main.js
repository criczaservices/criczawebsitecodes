document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navAuth = document.querySelector('.nav-auth');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navAuth.classList.toggle('active');
        });
    }

    // Skeleton loading simulation for turf cards
    const turfGrid = document.getElementById('turf-grid');
    if (turfGrid) {
        const skeletonCards = document.querySelectorAll('.skeleton-card');
        const actualContent = document.querySelectorAll('.actual-content');

        // Simulate network delay of 1.5 seconds purely for the WOW effect
        setTimeout(() => {
            skeletonCards.forEach(card => {
                // Add a smooth fade out
                card.style.transition = 'opacity 0.4s ease';
                card.style.opacity = '0';
                
                setTimeout(() => {
                    card.style.display = 'none';
                }, 400); 
            });

            setTimeout(() => {
                actualContent.forEach((card, index) => {
                    card.style.display = 'flex';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    
                    // Staggered fade in
                    setTimeout(() => {
                        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 150); // 150ms stagger
                });
            }, 400);

        }, 1500); 
    }
});

// Mock handler for Google Auth
function handleGoogleAuth(action) {
    console.log(`Initiating Google Auth for ${action}`);
    // Ideally this would redirect to a real OAuth provider or backend route
    alert(`This would start the Google Authentication flow for ${action}.`);
}
