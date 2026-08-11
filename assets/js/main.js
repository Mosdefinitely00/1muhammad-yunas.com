document.addEventListener("DOMContentLoaded", function() {
    
    // DYNAMIC YEAR
    const yearElement = document.getElementById("year");
    if(yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // NAV SCROLL
    const navbar = document.getElementById('navbar');
    if(navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // MOBILE MENU & AUTO-CLOSE
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if(hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
        });
        
        document.querySelectorAll('.mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
            });
        });
    }

    // INTERSECTION OBSERVER — FADE IN
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { 
            if (e.isIntersecting) { 
                e.target.classList.add('visible'); 
            } 
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // SMOOTH ANCHOR SCROLL
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const targetAttr = a.getAttribute('href');
            if(targetAttr !== "#") {
                const target = document.querySelector(targetAttr);
                if (target) { 
                    e.preventDefault(); 
                    target.scrollIntoView({ behavior: 'smooth' }); 
                }
            }
        });
    });

    // CONTACT FORM TO MAILTO ROUTING
    const form = document.querySelector('form');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = e.target.querySelector('.form-submit');
            if(btn) {
                btn.innerHTML = '<i class="fa-solid fa-check"></i> Redirecting to Email...';
                btn.style.background = '#2d6a4f';
                btn.style.borderColor = '#2d6a4f';
                btn.style.color = '#fff';
                btn.disabled = true;
                setTimeout(() => {
                    window.location.href = "mailto:yunasmuh@gmail.com";
                }, 800);
            }
        });
    }
});
