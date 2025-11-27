// ===================================
// PROJECT DATA WITH DOMAIN THEMES
// ===================================

const projects = [
  {
    title: "Resume Builder - Xenvra",
    description: "A professional resume builder application built with React and TypeScript. Features an intuitive interface for creating polished, ATS-friendly resumes with customizable templates and real-time preview.",
    tags: ["React", "TypeScript", "CSS", "Resume Builder"],
    image: "project-ecommerce.jpg",
    liveUrl: "https://github.com/Karanray06/Resume",
    githubUrl: "https://github.com/Karanray06/Resume",
    domain: "resume",
    colors: {
      primary: "#2563eb",
      secondary: "#dbeafe"
    }
  },
  {
    title: "GDG JISU Platform",
    description: "Community platform for Google Developer Group at JIS University. Built with HTML, CSS, and JavaScript to connect students and facilitate tech events and learning opportunities.",
    tags: ["HTML", "CSS", "JavaScript", "Community"],
    image: "project-analytics.jpg",
    liveUrl: "https://github.com/Karanray06/GDG_JISU",
    githubUrl: "https://github.com/Karanray06/GDG_JISU",
    domain: "tech",
    colors: {
      primary: "#7c3aed",
      secondary: "#f3e8ff"
    }
  },
  {
    title: "Personal Portfolio",
    description: "A minimalistic and professional portfolio website showcasing my projects and skills. Built with modern web technologies and designed for optimal user experience.",
    tags: ["HTML", "CSS", "JavaScript", "Portfolio"],
    image: "project-chatbot.jpg",
    liveUrl: "https://Karanray06.github.io/Personal_portfolio",
    githubUrl: "https://github.com/Karanray06/Personal_portfolio",
    domain: "dev",
    colors: {
      primary: "#059669",
      secondary: "#d1fae5"
    }
  },
  {
    title: "C Programming Journey",
    description: "A collection of C programming projects documenting my journey from basic programming concepts to advanced implementations. Includes data structures, algorithms, and problem-solving exercises.",
    tags: ["C", "Algorithms", "Data Structures"],
    image: "project-taskmanager.jpg",
    liveUrl: "https://github.com/Karanray06/C",
    githubUrl: "https://github.com/Karanray06/C",
    domain: "algorithms",
    colors: {
      primary: "#ea580c",
      secondary: "#fed7aa"
    }
  },
  {
    title: "Cloud Skills 2025",
    description: "Learning repository focused on cloud computing technologies and modern DevOps practices. Exploring cloud platforms, containerization, and scalable infrastructure.",
    tags: ["Cloud", "DevOps", "Jupyter Notebook"],
    image: "project-fitness.jpg",
    liveUrl: "https://github.com/Karanray06/Cloud-Skills-2025",
    githubUrl: "https://github.com/Karanray06/Cloud-Skills-2025",
    domain: "cloud",
    colors: {
      primary: "#db2777",
      secondary: "#fce7f3"
    }
  },
  {
    title: "Weather Application",
    description: "A real-time weather application with location-based forecasting. Built with JavaScript, featuring current weather data, multi-day forecasts, and beautiful UI design.",
    tags: ["JavaScript", "API", "UI/UX"],
    image: "project-weather.jpg",
    liveUrl: "https://github.com/Karanray06/Weather-App",
    githubUrl: "https://github.com/Karanray06/Weather-App",
    domain: "tech",
    colors: {
      primary: "#7c3aed",
      secondary: "#f3e8ff"
    }
  }
];

// ===================================
// NAVIGATION SCROLL EFFECT
// ===================================

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===================================
// SMOOTH SCROLL FOR NAVIGATION
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
// RENDER PROJECTS WITH DOMAIN THEMES
// ===================================

function renderProjects() {
  const projectsGrid = document.getElementById('projectsGrid');

  projects.forEach((project, index) => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    
    // Set CSS variables for domain colors
    projectCard.style.setProperty('--domain-color-primary', project.colors.primary);
    projectCard.style.setProperty('--domain-color-secondary', project.colors.secondary);

    // Create buttons HTML
    let buttonsHtml = '';

    if (project.liveUrl) {
      buttonsHtml += `
        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link">
          <i class="fas fa-external-link-alt"></i>
          <span>Live Demo</span>
        </a>
      `;
    }

    buttonsHtml += `
      <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link">
        <i class="fab fa-github"></i>
        <span>Source Code</span>
      </a>
    `;

    projectCard.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="project-image" id="projectImage${index}">
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
  rootMargin: '0px 0px -50px 0px'
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
  const elements = document.querySelectorAll('.project-card, .social-card, .stat-item, .section-header, .feature-item, .resume-preview');
  elements.forEach(el => observer.observe(el));
}

// ===================================
// STATS COUNTER ANIMATION
// ===================================

function animateStats() {
  const stats = document.querySelectorAll('.stat-number');

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalValue = target.textContent;
        const numericValue = parseInt(finalValue.replace(/\D/g, ''));
        const suffix = finalValue.replace(/[0-9]/g, '');

        let current = 0;
        const increment = numericValue / 40;
        const duration = 1500;
        const stepTime = duration / 40;

        const timer = setInterval(() => {
          current += increment;
          if (current >= numericValue) {
            target.textContent = numericValue + suffix;
            clearInterval(timer);
          } else {
            target.textContent = Math.floor(current) + suffix;
          }
        }, stepTime);

        statsObserver.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  stats.forEach(stat => statsObserver.observe(stat));
}

// ===================================
// MOBILE MENU TOGGLE
// ===================================

const navToggle = document.getElementById('navToggle');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    }
  });
}

// ===================================
// INITIALIZE
// ===================================

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();

  // Wait a bit for DOM to be ready, then observe elements
  setTimeout(() => {
    observeElements();
    animateStats();
  }, 100);
});

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================

// Lazy load images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        imageObserver.unobserve(img);
      }
    });
  });

  // Observe all images with data-src attribute
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ===================================
// COLOR PICKER FUNCTIONALITY (OPTIONAL)
// ===================================

// This allows easy customization of colors via CSS variables
function setProjectColors(projectIndex, primaryColor, secondaryColor) {
  const cards = document.querySelectorAll('.project-card');
  if (cards[projectIndex]) {
    cards[projectIndex].style.setProperty('--domain-color-primary', primaryColor);
    cards[projectIndex].style.setProperty('--domain-color-secondary', secondaryColor);
  }
}

console.log('Modern Portfolio loaded successfully ✓');
console.log('Domain-specific themes applied with gradient gradients and smooth animations')
