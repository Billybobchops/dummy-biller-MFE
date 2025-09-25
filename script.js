// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');

    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetPage = this.getAttribute('data-page');
            
            // Remove active class from all links and pages
            navLinks.forEach(l => l.classList.remove('active'));
            pages.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked link and corresponding page
            this.classList.add('active');
            document.getElementById(targetPage).classList.add('active');
            
            // Close mobile menu if open
            nav.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });

    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        nav.classList.toggle('active');
        this.classList.toggle('active');
    });

    // Close mobile menu when clicking outside or on nav links
    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            nav.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });

    // Close mobile menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1230) {
            nav.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });


    // Add loading animation for web component
    // const webComponentContainer = document.querySelector('.web-component-container');
    // if (webComponentContainer) {
    //     // Add a loading indicator while the web component loads
    //     const loadingIndicator = document.createElement('div');
    //     loadingIndicator.innerHTML = `
    //         <div style="
    //             display: flex;
    //             flex-direction: column;
    //             align-items: center;
    //             justify-content: center;
    //             padding: 2rem;
    //             color: var(--text-secondary);
    //         ">
    //             <div style="
    //                 width: 40px;
    //                 height: 40px;
    //                 border: 3px solid var(--shadow-dark);
    //                 border-top: 3px solid var(--primary-color);
    //                 border-radius: 50%;
    //                 animation: spin 1s linear infinite;
    //                 margin-bottom: 1rem;
    //             "></div>
    //             <p>Loading Paperless Billing Component...</p>
    //         </div>
    //     `;
        
    //     // Add CSS for spinner animation
    //     const style = document.createElement('style');
    //     style.textContent = `
    //         @keyframes spin {
    //             0% { transform: rotate(0deg); }
    //             100% { transform: rotate(360deg); }
    //         }
    //     `;
    //     document.head.appendChild(style);
        
    //     webComponentContainer.appendChild(loadingIndicator);
        
    //     // Remove loading indicator when web component loads
    //     const observer = new MutationObserver(function(mutations) {
    //         mutations.forEach(function(mutation) {
    //             if (mutation.type === 'childList') {
    //                 const paperlessComponent = webComponentContainer.querySelector('invoicecloud-paperless');
    //                 if (paperlessComponent) {
    //                     loadingIndicator.remove();
    //                     observer.disconnect();
    //                 }
    //             }
    //         });
    //     });
        
    //     observer.observe(webComponentContainer, {
    //         childList: true,
    //         subtree: true
    //     });
    // }


    // Add click effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add ripple animation CSS
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
});
