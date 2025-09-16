// MAIN JS
// Show menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// Menu Show
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show')
    })
}

// Menu Hidden
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show')
    })
}

// Remove menu mobile
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Scroll sections active link
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// Scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .projects__card, .contact__input',{interval: 200}); 

// Initialize AOS animation
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
});

// Contact form functionality
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const subject = document.querySelector('input[name="subject"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
    
    // Simple validation
    if (name === '' || email === '' || subject === '' || message === '') {
        formMessage.textContent = 'Please fill in all fields.';
        formMessage.className = 'form-message error';
        return;
    }
    
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.className = 'form-message error';
        return;
    }
    
    // Simulate form submission (in a real scenario, you would send this to a server)
    formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
    formMessage.className = 'form-message success';
    
    // Reset form
    contactForm.reset();
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
});

// CV download functionality
document.getElementById('download-cv').addEventListener('click', async function(e) {
    e.preventDefault();
    
    const downloadButton = this;
    const originalText = downloadButton.textContent;
    
    try {
        // Show loading state
        downloadButton.classList.add('downloading');
        downloadButton.textContent = 'Downloading...';
        
        // Simulate a small delay for better UX
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Create a temporary link element
        const link = document.createElement('a');
        link.href = 'CV..pdf';
        link.download = 'Nifad_Hasan_CV..pdf';
        
        // Append to body, click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Show success message briefly
        downloadButton.textContent = 'Downloaded!';
        setTimeout(() => {
            downloadButton.textContent = originalText;
        }, 2000);
        
    } catch (error) {
        // Show error message
        downloadButton.textContent = 'Error! Try Again';
        setTimeout(() => {
            downloadButton.textContent = originalText;
        }, 2000);
        console.error('CV download error:', error);
    } finally {
        // Remove loading state
        downloadButton.classList.remove('downloading');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Animate skill bars when they come into view
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skills__percentage-bar');
    
    skillBars.forEach(bar => {
        // Store the original width
        const originalWidth = bar.style.width;
        
        // Reset to 0 for animation
        bar.style.width = '0';
        
        // Animate to the original width
        setTimeout(() => {
            bar.style.width = originalWidth;
        }, 100);
    });
}

// Initialize skill bar animation when skills section is in view
const skillsSection = document.getElementById('skills');
if (skillsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(skillsSection);
}

// Initialize skill bars with their correct widths on page load
document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skills__percentage-bar');
    skillBars.forEach(bar => {
        // Remove any inline styles that might interfere
        bar.removeAttribute('style');
    });
});
