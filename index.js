// ===================================
// PROJECT DATA
// ===================================

const projects = [
  {
    title: "Resume Builder - Xenvra",
    description: "A professional resume builder application built with React and TypeScript. Features an intuitive interface for creating polished, ATS-friendly resumes with customizable templates and real-time preview.",
    tags: ["React", "TypeScript", "CSS", "Resume Builder"],
    image: "project-ecommerce.jpg",
    liveUrl: "https://karanray06.github.io/Resume_Builder-/",
    githubUrl: "https://github.com/Karanray06/Resume"
  },
  {
    title: "GDG JISU Platform",
    description: "Community platform for Google Developer Group at JIS University. Built with HTML, CSS, and JavaScript to connect students and facilitate tech events and learning opportunities.",
    tags: ["HTML", "CSS", "JavaScript", "Community"],
    image: "project-analytics.jpg",
    liveUrl: "https://github.com/Karanray06/GDG_JISU",
    githubUrl: "https://github.com/Karanray06/GDG_JISU"
  },
  {
    title: "Personal Portfolio",
    description: "A minimalistic and professional portfolio website showcasing my projects and skills. Built with modern web technologies and designed for optimal user experience.",
    tags: ["HTML", "CSS", "JavaScript", "Portfolio"],
    image: "project-chatbot.jpg",
    liveUrl: "https://Karanray06.github.io/Personal_portfolio",
    githubUrl: "https://github.com/Karanray06/Personal_portfolio"
  },
  {
    title: "C Programming Journey",
    description: "A collection of C programming projects documenting my journey from basic programming concepts to advanced implementations. Includes data structures, algorithms, and problem-solving exercises.",
    tags: ["C", "Algorithms", "Data Structures"],
    image: "project-taskmanager.jpg",
    liveUrl: "https://github.com/Karanray06/C",
    githubUrl: "https://github.com/Karanray06/C"
  },
  {
    title: "Cloud Skills 2025",
    description: "Learning repository focused on cloud computing technologies and modern DevOps practices. Exploring cloud platforms, containerization, and scalable infrastructure.",
    tags: ["Cloud", "DevOps", "Jupyter Notebook"],
    image: "project-fitness.jpg",
    liveUrl: "https://github.com/Karanray06/Cloud-Skills-2025",
    githubUrl: "https://github.com/Karanray06/Cloud-Skills-2025"
  },
  {
    title: "Weather Application",
    description: "A real-time weather application with location-based forecasting. Built with JavaScript, featuring current weather data, multi-day forecasts, and beautiful UI design.",
    tags: ["JavaScript", "API", "UI/UX"],
    image: "project-weather.jpg",
    liveUrl: "https://github.com/Karanray06/Weather-App",
    githubUrl: "https://github.com/Karanray06/Weather-App"
  }
];

// ===================================
// NAVIGATION
// ===================================

const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

// Scroll effect
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = navToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });

  // Close menu when clicking on a link
  const links = navLinks.querySelectorAll('.nav-link');
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      const icon = navToggle.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    });
  });
}

// ===================================
// SMOOTH SCROLL
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ===================================
// RENDER PROJECTS
// ===================================

function renderProjects() {
  const projectsGrid = document.getElementById('projectsGrid');

  projects.forEach((project, index) => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';

    // Create buttons HTML
    let buttonsHtml = '';

    if (project.liveUrl) {
      buttonsHtml += `
        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link">
          <i class="fas fa-external-link-alt"></i>
          <span>view project</span>
        </a>
      `;
    }

    buttonsHtml += `
      <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link">
        <i class="fab fa-github"></i>
        <span>code</span>
      </a>
    `;

    projectCard.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
      <div class="project-content">
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-links">
          ${buttonsHtml}
        </div>
      </div>
    `;

    projectsGrid.appendChild(projectCard);
  });
}

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements for fade-in animation
function observeElements() {
  const elements = document.querySelectorAll('.project-card, .social-card, .stat-item, .feature-box');
  elements.forEach(el => observer.observe(el));
}

// ===================================
// INITIALIZE
// ===================================

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();

  // Wait a bit for DOM to be ready, then observe elements
  setTimeout(() => {
    observeElements();
  }, 100);
});

console.log('✓ Minimalist portfolio loaded');
