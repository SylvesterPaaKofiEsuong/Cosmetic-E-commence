// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    mobileMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
});

// Product Image Gallery
const productImages = document.querySelectorAll('.product-image');
productImages.forEach(image => {
    image.addEventListener('click', function() {
        const mainImage = document.querySelector('.main-product-image');
        mainImage.src = this.src;
    });
});

// Shopping Cart Functions
const cart = {
    items: [],
    total: 0,
    
    addItem(product) {
        this.items.push(product);
        this.updateTotal();
        this.updateCartDisplay();
    },
    
    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.updateTotal();
        this.updateCartDisplay();
    },
    
    updateTotal() {
        this.total = this.items.reduce((sum, item) => sum + item.price, 0);
        document.querySelector('.cart-total').textContent = `$${this.total.toFixed(2)}`;
    },
    
    updateCartDisplay() {
        const cartCount = document.querySelector('.cart-count');
        cartCount.textContent = this.items.length;
    }
};

// Newsletter Subscription
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        // Add your newsletter subscription logic here
        showNotification('Thank you for subscribing!');
    });
}

// Notification System
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Product Filter
const filterProducts = (category) => {
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        if (category === 'all' || product.dataset.category === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
};

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Image Lazy Loading
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// Add to Cart Animation
function addToCartAnimation(productElement) {
    const clone = productElement.cloneNode(true);
    const cart = document.querySelector('.cart-icon');
    const rect = productElement.getBoundingClientRect();
    
    clone.style.position = 'fixed';
    clone.style.top = rect.top + 'px';
    clone.style.left = rect.left + 'px';
    clone.style.transition = 'all 1s ease-in-out';
    
    document.body.appendChild(clone);
    
    setTimeout(() => {
        clone.style.transform = `translate(${cart.offsetLeft - rect.left}px, ${cart.offsetTop - rect.top}px) scale(0.1)`;
        clone.style.opacity = '0';
        
        setTimeout(() => clone.remove(), 1000);
    }, 10);
}
