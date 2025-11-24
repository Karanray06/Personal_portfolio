// ===================================
// PROJECT DATA
// ===================================

const projects = [
  {
    title: "Resume Builder - Xenvra",
    description: "A professional resume builder application built with React and TypeScript. Features an intuitive interface for creating polished, ATS-friendly resumes with customizable templates and real-time preview.",
    tags: ["React", "TypeScript", "CSS", "Resume Builder"],
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Resume+Builder",
    liveUrl: "https://Karanray06.github.io/Resume",
    githubUrl: "https://github.com/Karanray06/Resume"
  },
  {
    title: "GDG JISU Platform",
    description: "Community platform for Google Developer Group at JIS University. Built with HTML, CSS, and JavaScript to connect students and facilitate tech events and learning opportunities.",
    tags: ["HTML", "CSS", "JavaScript", "Community"],
    image: "https://placehold.co/600x400/ea4335/ffffff?text=GDG+JISU",
    liveUrl: "https://Karanray06.github.io/GDG_JISU",
    githubUrl: "https://github.com/Karanray06/GDG_JISU"
  },
  {
    title: "Personal Portfolio",
    description: "A minimalistic and professional portfolio website showcasing my projects and skills. Built with modern web technologies and designed for optimal user experience.",
    tags: ["HTML", "CSS", "JavaScript", "Portfolio"],
    image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Portfolio",
    liveUrl: "https://Karanray06.github.io/Personal_portfolio",
    githubUrl: "https://github.com/Karanray06/Personal_portfolio"
  },
  {
    title: "C Programming Journey",
    description: "A collection of C programming projects documenting my journey from basic programming concepts to advanced implementations. Includes data structures, algorithms, and problem-solving exercises.",
    tags: ["C", "Algorithms", "Data Structures"],
    image: "https://placehold.co/600x400/0f172a/ffffff?text=C+Programming",
    liveUrl: "https://Karanray06.github.io/C",
    githubUrl: "https://github.com/Karanray06/C"
  },
  {
    title: "Cloud Skills 2025",
    description: "Learning repository focused on cloud computing technologies and modern DevOps practices. Exploring cloud platforms, containerization, and scalable infrastructure.",
    tags: ["Cloud", "DevOps", "Jupyter Notebook"],
    image: "https://placehold.co/600x400/7c3aed/ffffff?text=Cloud+Skills",
    liveUrl: "https://Karanray06.github.io/Cloud-Skills-2025",
    githubUrl: "https://github.com/Karanray06/Cloud-Skills-2025"
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
