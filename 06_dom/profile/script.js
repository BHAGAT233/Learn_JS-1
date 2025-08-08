// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navbarLinks = document.querySelectorAll('.nav-links a');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectsGrid = document.querySelector('.projects-grid');
const typingTextElement = document.getElementById('typing-text');
const progressBars = document.querySelectorAll('.progress');
const circles = document.querySelectorAll('.circle');
const contactForm = document.getElementById('contact-form');
const sections = document.querySelectorAll('section');
const navbar = document.getElementById('navbar');

// Sample project data
const projects = [
    {
        id: 1,
        title: 'E-commerce Website',
        category: 'web',
        image: '<https://via.placeholder.com/600x400>',
        description: 'A fully responsive e-commerce website with product filtering and cart functionality.',
        demoLink: '#',
        codeLink: '#',
    },
    {
        id: 2,
        title: 'Task Management App',
        category: 'app',
        image: '<https://via.placeholder.com/600x400>',
        description: 'A productivity app to help users manage and track their daily tasks.',
        demoLink: '#',
        codeLink: '#',
    },
    {
        id: 3,
        title: 'Portfolio Design',
        category: 'design',
        image: '<https://via.placeholder.com/600x400>',
        description: 'A modern and clean portfolio design for creative professionals.',
        demoLink: '#',
        codeLink: '#',
    },
    {
        id: 4,
        title: 'Weather Dashboard',
        category: 'web',
        image: '<https://via.placeholder.com/600x400>',
        description: 'A weather application that shows current and forecasted weather conditions.',
        demoLink: '#',
        codeLink: '#',
    },
    {
        id: 5,
        title: 'Mobile App UI',
        category: 'design',
        image: '<https://via.placeholder.com/600x400>',
        description: 'UI/UX design for a fitness tracking mobile application.',
        demoLink: '#',
        codeLink: '#',
    },
    {
        id: 6,
        title: 'Chat Application',
        category: 'app',
        image: '<https://via.placeholder.com/600x400>',
        description: 'Real-time chat application built with modern web technologies.',
        demoLink: '#',
        codeLink: '#',
    }
];

// Typing effect for hero section
const roles = ['Web Developer', 'Frontend Developer', 'UI/UX Designer', 'Freelancer'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 50;
let newTextDelay = 2000;

function typeText() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
        typingTextElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = erasingDelay;
    } else {
        typingTextElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingDelay = newTextDelay;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeText, typingDelay);
}

// Mobile menu toggle
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
}

// Smooth scrolling for navigation links
function smoothScroll(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: 'smooth'
    });

    // Close mobile menu after clicking a link
    if (navLinks.classList.contains('active')) {
        toggleMobileMenu();
    }
}

// Filter projects
function filterProjects() {
    const filter = this.getAttribute('data-filter');

    filterBtns.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');

    // Clear the projects grid
    projectsGrid.innerHTML = '';

    // Filter and add projects
    const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

    filteredProjects.forEach(project => {
        addProjectToDOM(project);
    });
}

// Add project to DOM
function addProjectToDOM(project) {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    projectCard.setAttribute('data-category', project.category);

    projectCard.innerHTML = `
        <div class="project-img">
            <img src="${project.image}" alt="${project.title}">
        </div>
        <div class="project-info">
            <span class="project-category">${project.category}</span>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-desc">${project.description}</p>
            <div class="project-links">
                <a href="${project.demoLink}" target="_blank"><i class="fas fa-eye"></i> Demo</a>
                <a href="${project.codeLink}" target="_blank"><i class="fas fa-code"></i> Code</a>
            </div>
        </div>
    `;

    projectsGrid.appendChild(projectCard);
}

// Animate progress bars when in viewport
function animateSkillBars() {
    progressBars.forEach(progress => {
        const percent = progress.getAttribute('data-percent');
        progress.style.width = percent + '%';
    });

    circles.forEach(circle => {
        const percent = circle.getAttribute('data-percent');
        circle.style.background = `conic-gradient(var(--primary-color) ${percent}%, #f0f0f0 0%)`;
    });
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = sectionId;
        }
    });

    navbarLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Form validation
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
    }

    // Simulate form submission
    alert(`Thank you, ${name}! Your message has been sent.`);

    // Reset form
    contactForm.reset();
}

// Change navbar styles on scroll
function changeNavbarStyles() {
    if (window.scrollY > 100) {
        navbar.style.padding = '10px 0';
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.padding = '15px 0';
        navbar.style.backgroundColor = 'var(--white)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
}

// Initialize the website
function init() {
    // Start typing effect
    setTimeout(typeText, 1000);

    // Event Listeners
    hamburger.addEventListener('click', toggleMobileMenu);

    navbarLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', filterProjects);
    });

    contactForm.addEventListener('submit', handleFormSubmit);

    window.addEventListener('scroll', () => {
        updateActiveNavLink();
        changeNavbarStyles();

        // Animate skills when skills section is in viewport
        const skillsSection = document.getElementById('skills');
        if (isInViewport(skillsSection)) {
            animateSkillBars();
        }
    });

    // Initial project loading
    projects.forEach(project => {
        addProjectToDOM(project);
    });
}

// Run when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
