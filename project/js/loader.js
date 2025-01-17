document.addEventListener('DOMContentLoaded', () => {
    // Debug check
    const loader = document.querySelector('.loader-container');
    if (!loader) {
        console.error('Loader container not found!');
        return;
    }
    
    // Initialize loader state
    loader.style.display = 'none';
    
    // Function to show loader
    function showLoader() {
        console.log('Showing loader'); // Debug log
        loader.style.display = 'flex';
    }
    
    // Add click handlers to all navigation links
    const links = document.querySelectorAll('a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').endsWith('.htm') || 
                this.getAttribute('href').endsWith('.html')) {
                e.preventDefault();
                console.log('Link clicked, showing loader'); // Debug log
                showLoader();
                
                // Navigate after ensuring loader is shown
                setTimeout(() => {
                    window.location.href = this.href;
                }, 2000);
            }
        });
    });
});