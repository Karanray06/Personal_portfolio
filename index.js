// ===================================
// PROJECT DATA
// ===================================

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured online marketplace with secure payment processing, inventory management, and responsive design for seamless shopping across all devices.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "project-ecommerce.jpg",
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/yourusername/ecommerce"
  },
  {
    title: "Task Management System",
    description: "Collaborative productivity tool featuring real-time updates, team workspaces, and intuitive project organization with drag-and-drop functionality.",
    tags: ["Vue.js", "Firebase", "Tailwind CSS"],
    image: "project-taskmanager.jpg",
    liveUrl: "https://example.com/taskmanager",
    githubUrl: "https://github.com/yourusername/taskmanager"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with location-based forecasts, interactive maps, and detailed meteorological data visualization.",
    tags: ["JavaScript", "OpenWeather API", "Chart.js"],
    image: "project-weather.jpg",
    liveUrl: "https://example.com/weather",
    githubUrl: "https://github.com/yourusername/weather"
  },
  {
    title: "Analytics Platform",
    description: "Comprehensive data analytics dashboard with customizable reports, trend analysis, and automated insights for business intelligence.",
    tags: ["Python", "Django", "D3.js", "PostgreSQL"],
    image: "project-analytics.jpg",
    liveUrl: "https://example.com/analytics",
    githubUrl: "https://github.com/yourusername/analytics"
  },
  {
    title: "Fitness Tracker",
    description: "Mobile-responsive fitness application with workout logging, progress tracking, and personalized health recommendations.",
    tags: ["React Native", "Express", "MongoDB"],
    image: "project-fitness.jpg",
    liveUrl: "https://example.com/fitness",
    githubUrl: "https://github.com/yourusername/fitness"
  },
  {
    title: "Portfolio Builder",
    description: "Intuitive portfolio creation tool with customizable templates, drag-and-drop editor, and one-click deployment capabilities.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "project-chatbot.jpg",
    liveUrl: "https://example.com/portfolio-builder",
    githubUrl: "https://github.com/yourusername/portfolio-builder"
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
// RENDER PROJECTS
// ===================================

function renderProjects() {
  const projectsGrid = document.getElementById('projectsGrid');

  projects.forEach((project, index) => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';

    projectCard.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="project-image" id="projectImage${index}">
      <div class="project-content">
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-links">
          <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link">
            <i class="fas fa-external-link-alt"></i>
            <span>Live Demo</span>
          </a>
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link">
            <i class="fab fa-github"></i>
            <span>Source Code</span>
          </a>
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
  const elements = document.querySelectorAll('.project-card, .social-card, .stat-item, .section-header');
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

console.log('Portfolio loaded successfully ✓');
